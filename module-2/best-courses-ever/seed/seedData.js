import { hashPassword } from '../src/utils/utils.js';

export const getMockUsers = async () => [
  {
    id: 'user-1',
    login: 'john_doe',
    email: 'john@example.com',
    password: await hashPassword('password123'),
    fullName: 'John Doe',
    role: 'admin'
  },
  {
    id: 'user-2',
    login: 'jane_smith',
    email: 'jane@example.com',
    password: await hashPassword('password123'),
    fullName: 'Jane Smith',
    role: 'author'
  },
  {
    id: 'user-3',
    login: 'mike_johnson',
    email: 'mike@example.com',
    password: await hashPassword('password123'),
    fullName: 'Mike Johnson',
    role: 'user'
  }
];

export const mockComments = [
  {
    id: 'comment-1',
    text: 'Отличный курс! Очень понятно объясняют основы.',
    authorId: 'user-3',
    lessonId: 'lesson-1'
  },
  {
    id: 'comment-2',
    text: 'Спасибо за практические примеры, очень помогли!',
    authorId: 'user-3',
    lessonId: 'lesson-2'
  }
];

export const mockCourses = [
  {
    id: 'course-1',
    title: 'JavaScript для начинающих',
    description: 'Изучите основы JavaScript с нуля. Переменные, функции, DOM и многое другое.',
    complexityLevel: 'easy',
    tags: ['javascript', 'programming', 'beginner'],
    authorId: 'user-2',
    rating: 4.5,
    isPublished: true,
    lessons: [
      {
        id: 'lesson-1',
        title: 'Введение в JavaScript',
        description: 'Что такое JavaScript и зачем он нужен',
        content: { type: 'text', data: 'JavaScript - это язык программирования...' },
        order: 0,
        duration: 30,
        isPublished: true
      },
      {
        id: 'lesson-2',
        title: 'Переменные и типы данных',
        description: 'Изучаем переменные, строки, числа и булевы значения',
        content: { type: 'text', data: 'Переменные хранят данные...' },
        order: 1,
        duration: 45,
        isPublished: true
      }
    ],
    extraMaterials: [
      {
        id: 'extraMaterials-1',
        type: 'video',
        title: 'Установка Node.js',
        content: { url: 'https://example.com/video1' }
      }
    ],
    inputOutputExamples: [
      {
        id: 'inputOutputExamples-1',
        type: 'code',
        title: 'Пример: Hello World',
        content: { code: 'console.log("Hello World");', output: 'Hello World' }
      }
    ],
    commentsIds: ['comment-1', 'comment-2'], // ДОБАВЬТЕ сразу в создании
    appointedUsersIds: ['user-1', 'user-3']
  },
  {
    id: 'course-2',
    title: 'Продвинутый React',
    description: 'Глубокое погружение в React: хуки, контекст, производительность.',
    complexityLevel: 'hard',
    tags: ['react', 'javascript', 'frontend', 'advanced'],
    authorId: 'user-2',
    rating: 4.8,
    isPublished: true,
    lessons: [
      {
        id: 'lesson-3',
        title: 'React Hooks глубоко',
        description: 'useState, useEffect, useMemo и кастомные хуки',
        content: { type: 'text', data: 'Хуки позволяют использовать состояние...' },
        order: 0,
        duration: 60,
        isPublished: true
      }
    ],
    appointedUsersIds: ['user-1']
  }
];
