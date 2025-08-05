const mongoose = require('mongoose');

// console.log('Connecting to MongoDB...');

const connectToDb = async () => {
  const uri = process.env.MONGO_URI;
    console.log('MongoDB URI:', uri);
  if (!uri) {
    console.error('❌MONGO_URI not found in environment variables');
    return;
  }
  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌MongoDB connection failed:', error.message);
  }
};

module.exports = connectToDb;