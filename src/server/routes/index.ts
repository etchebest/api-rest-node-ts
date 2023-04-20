import express, { Router } from 'express';
import cors from 'cors';

const router = Router();
router.use(express.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.status(200).send('Passou');
});

router.post('/teste', (req, res) => {
  res.json(req.body);
});

export { router };
