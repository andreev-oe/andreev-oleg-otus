import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'author'],
    required: true,
    default: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  createdCoursesIds: [String],
  // TODO доработать на соответствующем шаге, добавив хеширование для чувствительных данных
  login: String,
  password: String,
}, {
  timestamps: true,
  _id: true,
});

export const User = model('User', userSchema);
