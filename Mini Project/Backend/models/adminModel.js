const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" }, 
    category: {  type: String,required: true },
    location: { 
      latitude: Number,
      longitude: Number,
      address: String,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);
