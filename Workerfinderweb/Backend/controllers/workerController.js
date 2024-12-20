// controllers/workerController.js
const Worker = require('../models/Worker'); // Import the Worker model

// Controller function to get workers by category
const getWorkersByCategory = async (req, res) => {
  try {
    // Extract category from the URL parameters
    const { category } = req.params;

    // Fetch workers by category, populate the head information (admin)
    const workers = await Worker.find({ category })
      .populate('head', 'fullName username'); // Populate head details (fullName, username)

    // If no workers found
    if (workers.length === 0) {
      return res.status(404).json({ message: `No workers found for category: ${category}` });
    }

    // Return the workers as a response
    res.status(200).json(workers);
  } catch (err) {
    console.error('Error fetching workers by category:', err);
    res.status(500).json({ message: 'Error fetching workers by category' });
  }
};

module.exports = {
  getWorkersByCategory,
};
