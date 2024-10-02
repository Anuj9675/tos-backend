import express from 'express';
import { createAbout, getAbout } from '../controllers/aboutController';

const router = express.Router();

router.post('/', createAbout);
router.get('/', getAbout);

export default router;
