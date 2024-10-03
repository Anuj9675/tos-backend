import express from 'express';
import { createFAQ, getFAQs, deleteFAQ } from '../controllers/faqController';

const router = express.Router();

router.post('/', createFAQ);
router.get('/', getFAQs);
router.delete('/:id', deleteFAQ);

export default router;
