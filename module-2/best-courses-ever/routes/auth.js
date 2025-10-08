import express from 'express';
const router = express.Router();

/* GET auth page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Страница авторизации' });
});

export default router;
