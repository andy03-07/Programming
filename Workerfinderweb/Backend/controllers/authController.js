// const User = require('../models/User');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const register = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({ name, email, password: hashedPassword });
//         await newUser.save();

//         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
//         res.status(201).json({ token, user: newUser });
//     } catch (error) {
//         res.status(500).json({ message: "Registration failed", error });
//     }
// };

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) return res.status(404).send("User not found");

//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) return res.status(403).send("Invalid password");

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//         res.send({ token, user });
//     } catch (error) {
//         res.status(500).json({ message: "Login failed", error });
//     }
// };

// module.exports = { register, login };

const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Generate JWT
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ message: "User registered successfully", token, user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Registration failed", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({ message: "Invalid password" });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
};

module.exports = { register, login };
