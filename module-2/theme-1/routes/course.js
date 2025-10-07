import express from 'express';
const router = express.Router();

/* GET course page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Страница курса' });
});

export default router;
