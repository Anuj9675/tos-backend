import express from 'express';
import { createCareer, getCareers } from '../controllers/careerController';

const router = express.Router();

router.post('/', createCareer);
router.get('/', getCareers);

export default router;
