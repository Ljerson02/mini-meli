import { Router } from 'express';
import { getItems, getItemById } from '../controllers/productController';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/items', asyncHandler(getItems));
router.get('/items/:id', asyncHandler(getItemById));

export default router; 