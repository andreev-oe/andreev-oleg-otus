import createError from 'http-errors';
import express from 'express';
import { join, dirname } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import courseRouter from './routes/course.js';
import coursesRouter from './routes/courses.js';
import { connectDB } from  './config/mongodb.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Подключение к базе данных
dotenv.config();
connectDB();

// certificate
const credentials  = {
  key: fs.readFileSync(join(__dirname, 'src', 'credentials', 'private-key.key')),
  cert: fs.readFileSync(join(__dirname, 'src', 'credentials', 'certificate.crt'))
};

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/course', courseRouter);
app.use('/courses', coursesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export { app, credentials };
