// createWorker.js
const Worker = require('./models/Worker');
const User = require('./models/UserModel'); // Import your User model to find the head/admin

const createWorker = async () => {
  try {
    // Assuming you already have a head's userId
    const head = await User.findOne({ username: 'adminUser' }); // Replace with actual logic to get admin head

    const newWorker = new Worker({
      name: 'John Smith',
      category: 'Plumbing',
      contact: '9876543210',
      head: head._id, // Setting the head (admin) of this worker
    });

    await newWorker.save(); // Save the new worker to the database
    console.log('Worker created successfully');
  } catch (err) {
    console.error('Error creating worker:', err);
  }
};

createWorker();
