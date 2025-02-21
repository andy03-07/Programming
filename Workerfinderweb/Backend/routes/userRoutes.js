// const express = require('express');
// const { addToHistory } = require('../controllers/userController');
// const router = express.Router();

// router.post('/history', addToHistory);router.post('/register', registerUser);


// module.exports = router;


// // Registration route
// app.post('/api/register', async (req, res) => {
//     const { username, password, email } = req.body;
    
//     try {
//       const existingUser = await User.findOne({ username });
//       if (existingUser) return res.status(400).json({ error: 'Username already exists' });
  
//       const newUser = new User({ username, password, email });
//       await newUser.save();
//       res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//       res.status(500).json({ error: 'Registration failed', details: err.message });
//     }
//   });
  

// const express = require('express');
// const { addToHistory, registerUser } = require('../controllers/userController'); // Ensure registerUser is imported here
// const router = express.Router();

// // Route to add to history
// router.post('/history', addToHistory);

// // Registration route
// router.post('/register', registerUser);

// // Export the router
// module.exports = router;


const express = require('express');
const { registerUser, loginUser, updateOneUser,getUserProfile } = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/:id', updateOneUser);
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;


