const User = require('./models/UserModel');

const createUser = async () => {
  try {
    // Define the user data you want to insert
    const newUser = new User({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      username: 'john_doe',
      password: 'hashedPassword', // Use bcrypt to hash the password before saving
      role: 'user', // Or 'admin' depending on the role
      mobileNumber: '1234567890',
      countryCode: '+91'
    });

    // Save the new user to MongoDB
    await newUser.save();
    console.log('User created successfully');
  } catch (err) {
    console.error('Error creating user:', err);
  }
};

// Call the function to create a new user
createUser();
