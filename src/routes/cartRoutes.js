import express from 'express';
import getCartByIdUser from '../controllers/cart/getCartController.js';
import addToCart from '../controllers/cart/addToCartController.js';
import removeFromCart from '../controllers/cart/removeFromCartController.js';
import clearCart from '../controllers/cart/clearCartController.js';
import { updateCartQuantity } from '../controllers/cart/updateCartController.js';

const router = express.Router();

router.get('/:userId', getCartByIdUser);

router.post('/:userId/add', addToCart);

router.patch('/:userId/clear', clearCart);

router.delete('/:userId/remove/:productId', removeFromCart);

router.post('/update-quantity', updateCartQuantity);

export default router;
