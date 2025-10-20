import express from 'express';
import { getAllShoes, getShoeById, createShoe, updateShoe, deleteShoe } from '../controllers/shoeController.js';

const router = express.Router();

router.get('/items', getAllShoes);
router.get('/items/:id', getShoeById);
router.post('/items', createShoe);
router.put('/items/:id', updateShoe);
router.delete('/items/:id', deleteShoe);

export default router;