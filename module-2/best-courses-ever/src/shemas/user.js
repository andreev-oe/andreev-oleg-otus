import { model, Schema } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import autopopulate from 'mongoose-autopopulate';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  id: {
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
  login: String,
  password: String,
}, {
  timestamps: true,
  _id: true,
});

userSchema.plugin(mongooseLeanVirtuals);
userSchema.plugin(autopopulate);

// Хеширование пароля
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Метод проверки пароля
userSchema.methods.correctPassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export const User = model('User', userSchema);
