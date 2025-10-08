import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log(process.env)
    const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:${process.env.MONGO_CONTAINER_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`;

    await mongoose.connect(mongoURI);

    console.log('MongoDB успешно подключена');
  } catch (error) {
    console.error('MongoDB ошибка подключения:', error);
    process.exit(1);
  }
};
