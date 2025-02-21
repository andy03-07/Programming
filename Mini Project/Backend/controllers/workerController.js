const worker = require('../models/workerModel');

const addWorker =  async (req, res) => {
  const { adminId, workername, contact, address, experience, specialty } = req.body;

  if (!adminId) {
    return res.status(400).json({ error: "Admin ID is required" });
  }
    try {
        const exists = await worker.findOne({workername, address, adminId });
        const category = req.path.replace('/add', '');

        if (exists) {
          return res.status(400).json({ message: "Worker already exists!" });
        }

        const newWorker = new worker({
          workername,
          contact,
          address,
          experience,
          specialty,
          category,
          adminId, 
        });    
        
        await newWorker.save();
      res.status(201).json({newWorker, message:`${category} created successfully`});
    }catch (error) {
      console.error("Error in addWorker:", error); 
      res.status(500).json({ error: "Failed to add worker", details: error.message });
  }
};  

const getWorker = async (req, res) => {
  try {
    let workers;
    const category = req.path.split('/')[1].replace('get', '');
    const { adminId} = req.params;
    if (!adminId) {
      return res.status(400).json({ error: "Admin ID is required" });
    }else if(adminId ==="all"){
      workers = await worker.find({category});
    }else{
    workers = await worker.find({adminId });
    }
    if (workers.length === 0) {
      return res.status(404).json({ message: "No workers found for this category" });
    }
    res.json(workers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workers", details: error.message });
  }
};


  const deleteWorker = async (req, res) => {
    try {
      await worker.findByIdAndDelete(req.params.id);
      res.json({ message: "Worker deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete worker" ,details: error.message});
    }
  };

  module.exports = {addWorker , getWorker , deleteWorker};