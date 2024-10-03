import express from 'express';
import { createAbout, deleteAbout, getAbout } from '../controllers/aboutController';

const router = express.Router();

router.post('/', createAbout);
router.get('/', getAbout);
router.delete('/:id', deleteAbout);

export default router;
