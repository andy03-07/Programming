require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes/routes");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const twilio = require("twilio");
const User = require("./models/userModel");
const Admin = require("./models/adminModel");

connectDB();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Worker Finder API');
});

app.use('/api', routes);

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const findUserOrAdmin = async (email, phone) => {
    let user = await User.findOne({ $or: [{ email }, { phone }] });
    if (user) return { user, role: "user" };

    let admin = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (admin) return { user: admin, role: "admin" };

    return { user: null, role: null };
};

const generateOTP = () => otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

app.post('/api/send-otp', async (req, res) => {
    try {
        const { email, phone } = req.body;
        if (!email && !phone) return res.status(400).json({ message: "Email or Phone required" });

        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 5 * 60000);

        const { user, role } = await findUserOrAdmin(email, phone);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.updateOne({ otp, otpExpiry });

        if (email) {
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Your OTP Code",
                text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) console.error("Email error:", error);
            });
        }

        if (phone) {
            try {
                await twilioClient.messages.create({
                    body: `Your OTP is ${otp}. It is valid for 5 minutes.`,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: phone
                });
            } catch (error) {
                console.error("SMS error:", error);
            }
        }

        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        console.error("Error in send-otp:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/api/verify-otp', async (req, res) => {
    try {
        const { email, phone, otp, isSignup } = req.body;

        if (!otp) return res.status(400).json({ message: "OTP is required" });

        let { user, role } = await findUserOrAdmin(email, phone);

        if (!user && isSignup) {
            user = new User({ email, phone, otp: null, otpExpiry: null });
            await user.save();
            role = "user";
        } else if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.otp !== otp || new Date() > user.otpExpiry) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        await user.updateOne({ otp: null, otpExpiry: null });

        res.status(200).json({ message: "OTP verified successfully", role, token: "fake-jwt-token" });
    } catch (error) {
        console.error("Error in verify-otp:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = app;
