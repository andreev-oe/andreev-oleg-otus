import mongoose from 'mongoose';
import { MONGO_URI } from './consts.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('MongoDB успешно подключена');
  } catch (error) {
    console.error('MongoDB ошибка подключения:', error);
    process.exit(1);
  }
};
