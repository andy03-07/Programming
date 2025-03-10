const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  // Include bcrypt for hashing passwords
const dotenv = require('dotenv');

dotenv.config();

// Registration controller
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save user to DB
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'User logged in successfully', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// Update one user
const updateOneUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    // Check if user exists before updating
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Update many users based on criteria
const updateManyUsers = async (req, res) => {
  const { criteria, updates } = req.body;

  try {
    // Ensure that criteria and updates are valid
    if (!criteria || !updates) {
      return res.status(400).json({ message: 'Criteria and updates are required' });
    }

    // Perform the update
    const result = await User.updateMany(criteria, updates);
    if (result.nModified === 0) {
      return res.status(404).json({ message: 'No users matched the criteria or no changes made' });
    }

    res.status(200).json({ message: 'Users updated successfully', modifiedCount: result.nModified });
  } catch (error) {
    res.status(500).json({ message: 'Error updating users', error: error.message });
  }
};

// Find by ID and update
const findByIdAndUpdateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};


const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser, updateOneUser, updateManyUsers, findByIdAndUpdateUser, getUserProfile };



