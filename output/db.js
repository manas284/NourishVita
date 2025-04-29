const mongoose = require('mongoose');

const connectDB = async () => {
  const connectionString = 'mongodb+srv://manastiwari625:manas1234@cluster0.xrnculq.mongodb.net/test';
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};
module.exports = connectDB;