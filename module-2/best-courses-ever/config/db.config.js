import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@localhost:${process.env.MONGO_CONTAINER_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`;
