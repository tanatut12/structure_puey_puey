import express from 'express';
import getCartByIdUser from '../controllers/cart/getCartController.js';
import addToCart from '../controllers/cart/addToCartController.js';
import removeFromCart from '../controllers/cart/removeFromCartController.js';
import clearCart from '../controllers/cart/clearCartController.js';

const router = express.Router();


router.get('/:userId', getCartByIdUser);


router.post('/:userId/add', addToCart);


router.patch('/:userId/clear', clearCart);


router.delete('/:userId/remove/:productId', removeFromCart);

export default router;
