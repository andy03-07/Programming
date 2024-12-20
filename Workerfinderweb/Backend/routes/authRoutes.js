const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/UserModel');
const {loginUser, registerUser, getUserProfile ,updateOneUser, updateManyUsers, findByIdAndUpdateUser } = require('../controllers/userController');
const router = express.Router();

// JWT Secret Key (should be stored securely in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || '7296729c69d7270a69d1ef2ccc253f5e12c5fa308f0112da05cca9bf657ded5b72cc2cd523be3084ba7a0fe38ed3433a575b69b75d2d0af811ed06c589b562b9';


router.post('/signup', (req, res) => {
  res.status(201).json({ message: 'Signup successful!' });
});
// Signup route (with validation)
router.post(
  '/signup',
  [
    check('fullName').notEmpty().withMessage('Full name is required'),
    check('mobileNumber').notEmpty().withMessage('Mobile number is required'),
    check('countryCode').notEmpty().withMessage('Country code is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('username').notEmpty().withMessage('Username is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    check('role').notEmpty().withMessage('Role is required'),
    check('category').optional() // Optional for non-admins
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { fullName, mobileNumber, countryCode, email, username, password, role, category } = req.body;

    try {
      // Check if email already exists
      const userExists = await User.findOne({ email });
      if (userExists) return res.status(400).json({ message: 'Email is already in use' });

      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user with role and category
      const newUser = new User({
        fullName,
        mobileNumber,
        countryCode,
        email,
        username,
        password: hashedPassword,
        role,
        category: role === 'admin' ? category : null // Only set category if user is admin
      });

      // Save the user to MongoDB
      await newUser.save();

      // Create a JWT token
      const token = jwt.sign(
        { userId: newUser._id, role: newUser.role, category: newUser.category },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      return res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);



// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate that password is a string
    if (typeof password !== 'string') {
      return res.status(400).json({ message: 'Password must be a string' });
    }

    // Check if user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Check if the provided password matches the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT if credentials are correct
    const token = jwt.sign(
      { userId: user._id, role: user.role, category: user.category },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Determine redirect path based on role and category
    let redirectPath = '/';
    if (user.role === 'admin' && user.category) {
      redirectPath = `/admin/${user.category}`;
    } else {
      redirectPath = '/';
    }

    return res.status(200).json({ message: 'Login successful', token, redirectPath });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', loginUser);

router.get('/profile', authMiddleware,getUserProfile,);
// Update one user by ID
router.put('/updateOne/:id', updateOneUser);

// Update many users by criteria
router.put('/updateMany', updateManyUsers);

// Find by ID and update
router.put('/findByIdAndUpdate/:id', findByIdAndUpdateUser);

module.exports = router;

