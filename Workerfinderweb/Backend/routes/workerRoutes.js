// workerRoutes.js
const express = require('express');
const Worker = require('../models/Worker');

const router = express.Router();

// Route to fetch worker details by worker ID
router.get('/worker/:workerId', async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.workerId).populate('head'); // Populate head field
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json(worker);
  } catch (err) {
    console.error('Error fetching worker details:', err);
    res.status(500).json({ message: 'Error fetching worker details' });
  }
});

module.exports = router;
