import mongoose from 'mongoose';
import { User } from '../src/shemas/user.js';
import { Course, Comment } from '../src/shemas/course.js';
import { mockComments, mockCourses, getMockUsers } from './seedData.js';
import { MONGO_URI } from '../config/db.config.js';
import dotenv from 'dotenv';

dotenv.config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Подключен к MongoDB');

    // Очистка базы
    await User.collection.drop();
    await Course.collection.drop();
    await Comment.collection.drop();
    console.log('БД очищена');

    // Создаем данные
    const mockUsers = await getMockUsers();
    const users = await User.create(mockUsers);
    console.log(`Создано ${users.length} пользователей`);

    const comments = await Comment.create(mockComments);
    console.log(`Создано ${comments.length} комментариев`);

    const courses = await Course.create(mockCourses);
    console.log(`Создано ${courses.length} курсов`);

    // Обновляем пользователя с созданными курсами
    await User.findOneAndUpdate(
      { id: 'user-2' },
      { $set: { createdCoursesIds: ['course-1', 'course-2'] } }
    );

    console.log('База данных успешно заполнена тестовыми данными');

  } catch (error) {
    console.error('Ошибка заполнения базы данных:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Соединение с базой данных закрыто');
  }
};

seedDatabase();
