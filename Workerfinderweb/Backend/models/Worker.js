const mongoose = require('mongoose');

// Define the Worker Schema
const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces from the name
    },
    category: {
      type: String,
      required: true,
      enum: [
        'Plumbing',
        'Carpentry',
        'Electrical',
        'Painting',
        'Masonry',
        'Maid',
        'Fabrication',
        'Cleaning',
        'Tailoring',
      ], // Example predefined categories
      trim: true,
    },
    contact: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          // Example: Validating a 10-digit phone number
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    availability: {
      type: Boolean,
      default: true, // Assuming workers are available by default
    },
    head: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model (worker's head or manager)
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Method to fetch the full worker details with the head information populated
workerSchema.methods.getFullDetails = async function () {
  try {
    // This method will return the worker's full details, including their head information
    const workerDetails = await this.populate('head').execPopulate();
    return workerDetails;
  } catch (error) {
    console.error('Error fetching worker details with head:', error);
    throw error;
  }
};

// Export the Worker model
module.exports = mongoose.model('Worker', workerSchema);
