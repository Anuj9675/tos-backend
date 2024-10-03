import express from 'express';
import { createService, deleteService, getServices } from '../controllers/serviceController';

const router = express.Router();

router.post('/', createService);
router.get('/', getServices);
router.delete('/:id', deleteService);


export default router;
