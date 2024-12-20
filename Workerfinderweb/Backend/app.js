// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const workerRoutes = require('./routes/workerRoutes');
// const userRoutes = require('./routes/userRoutes');
// const authMiddleware = require('./middleware/authMiddleware');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/workers', workerRoutes);
// app.use('/api/user', authMiddleware, userRoutes);

// // Start Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// module.exports = app;


// app.js

const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import custom modules
const connectDB = require('./config/db');
const workerRoutes = require('./routes/workerRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const User = require('./models/UserModel');
const Worker = require('./models/Worker');

// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST", "GET", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
};

app.use(express.json());  // For parsing application/json

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', authRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/user', authMiddleware, userRoutes);

// Basic route to test API is running
app.get("/", (req, res) => {
  res.send("Welcome to Worker Finder API");
});

app.post('/api/auth/signup', (req, res) => {
  // Signup logic here
  res.status(201).json({ message: 'Signup successful!' });
});

// User Registration route
// app.post("/api/register", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Error registering user", details: err.message });
//   }
// });

// // User Login route
// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ error: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     res.status(500).json({ error: "Login failed", details: err.message });
//   }
// });

// // Middleware to authenticate JWT
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];  // Bearer <token>
//   if (!token) return res.status(401).json({ error: "Access Denied" });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: "Invalid Token" });
//     req.user = user;
//     next();
//   });
// };

// Fetch workers by category
app.get("/api/workers/:category", async (req, res) => {
  const category = req.params.category;

  try {
    const workers = await Worker.find({ category });
    res.json({ message: `Workers for ${category}`, workers });
  } catch (err) {
    res.status(500).json({ error: `Failed to fetch workers for ${category}`, details: err.message });
  }
});

// Fetch user history (workers hired by user)
app.get("/api/history", authenticateJWT, async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId).populate('history');
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ message: `History for user ${userId}`, history: user.history });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user history", details: err.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
