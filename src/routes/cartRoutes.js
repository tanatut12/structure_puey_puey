import express from 'express';
import removeFromCart from '../controllers/cart/removeFromCartController.js';
import clearCart from '../controllers/cart/clearCartController.js';

const router = express.Router();

// remove cart (Update)
router.patch('/:userId/remove', clearCart);
// delete cart
router.delete('/:userId', removeFromCart);

export default router;
