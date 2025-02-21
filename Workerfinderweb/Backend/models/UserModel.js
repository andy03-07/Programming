const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash passwords

// Define user schema
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  countryCode: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Hash password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password has been modified
  try {
    const saltRounds = 10; // Recommended salt rounds
    this.password = await bcrypt.hash(this.password, saltRounds);
    next(); // Proceed with save operation
  } catch (err) {
    next(err); // Pass error to the next middleware if any occurs
  }
});

// Compare the entered password with the stored hash
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Check if model is already compiled to avoid OverwriteModelError
const User = mongoose.model('User', userSchema);

module.exports = User;
