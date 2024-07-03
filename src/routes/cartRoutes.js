import express from 'express';
import getCartByIdUser from '../controllers/cart/getCartController.js';
import addToCart from '../controllers/cart/addToCartController.js';

const router = express.Router();

//get cart by id user
router.get('/:userId', getCartByIdUser);
//add product in cart
router.post('/:userId/add', addToCart);

export default router;
