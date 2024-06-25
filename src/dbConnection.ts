import mongoose from 'mongoose';

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/eventDatabase';

export const connectToDatabase = async () => {
    try {
      await mongoose.connect(url);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    }
  };
