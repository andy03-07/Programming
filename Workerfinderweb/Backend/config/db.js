//  // config/db.js
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         // Replace 'your_mongo_uri' with your actual MongoDB URI
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1); // Exit the process with failure code
//     }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// // const url = process.env.VITE_MONGO_URI
// const connectToMongo = ()=>{
//     mongoose.connect("mongodb+srv://andy_07:1415AdB@cluster0.bm83h.mongodb.net/", {
//         tls: true,
//         tlsInsecure: true,
        
//       });
// }
// module.exports = connectToMongo;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//       const mongoURI = process.env.MONGO_URI;
//       if (!process.env.MONGO_URI) {
//         throw new Error('MONGO_URI is not defined in the .env file');
//     }

//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.error('MongoDB connection error:', err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  // No need for useNewUrlParser or useUnifiedTopology
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
