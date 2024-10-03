import express from 'express';
import { createCareer, deleteCareer, getCareers } from '../controllers/careerController';

const router = express.Router();

router.post('/', createCareer);
router.get('/', getCareers);
router.delete('/:id', deleteCareer);

export default router;
