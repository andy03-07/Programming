// models/History.js
const mongoose = require('mongoose');

// Define the history schema
const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true }, // Reference to Worker
  hiredAt: { type: Date, default: Date.now }, // Date when the worker was hired
  status: { type: String, enum: ['hired', 'completed'], default: 'hired' }, // Status of the hire
}, { timestamps: true });

// Export the History model
module.exports = mongoose.model('History', historySchema);
