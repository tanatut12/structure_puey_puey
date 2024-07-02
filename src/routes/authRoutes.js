// src/routes/authRoutes.js
import express from 'express';
import { registerUser, verifyUser,resendVerificationEmail } from '../controllers/users/registerController.js'; 
import sanitizeRegisterInput from '../middlewares/authMiddleware/sanitizeInput.js';
import registerLimiter from '../middlewares/authMiddleware/rateLimit.js';
import validateInput from '../middlewares/authMiddleware/validateInput.js';

const router = express.Router();

router.post(
  '/register',
  registerLimiter,
  sanitizeRegisterInput,
  validateInput(['username', 'email', 'password']),
  registerUser
);

router.get('/verify/:token', verifyUser);
router.post('/resend-verification', resendVerificationEmail);

export default router;
