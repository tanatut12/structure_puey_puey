import express from 'express';
import getCartByIdUser from '../controllers/cart/getCartController.js';
import addToCart from '../controllers/cart/addToCartController.js';
import removeFromCart from '../controllers/cart/removeFromCartController.js';
import clearCart from '../controllers/cart/clearCartController.js';

const router = express.Router();

//get cart by id user
router.get('/:userId', getCartByIdUser);
//add product in cart
router.post('/:userId/add', addToCart);
// remove cart (Update)
router.patch('/:userId/remove', clearCart);
// delete cart
router.delete('/:userId', removeFromCart);

export default router;
