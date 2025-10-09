import mongoose from 'mongoose';
import { User } from '../src/shemas/user.js';
import { Course, Comment } from '../src/shemas/course.js';
import { mockComments, mockCourses, mockUsers, MONGO_URI } from './consts.js';

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Подключен к MongoDB');

    // Очистка базы
    await User.deleteMany();
    await Course.deleteMany();
    await Comment.deleteMany();
    console.log('БД очищена');

    // Создаем данные
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
