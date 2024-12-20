// Import the built-in crypto module
const crypto = require('crypto');

// Generate a random 64-byte (512-bit) string and convert it to hexadecimal format
const secret = crypto.randomBytes(64).toString('hex');

// Output the generated secret to the console
console.log("Your generated JWT_SECRET is:", secret);
