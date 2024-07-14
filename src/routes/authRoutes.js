import express from 'express';
import {
  registerUser,
  verifyUser,
  resendVerificationEmail,
} from '../controllers/users/registerController.js';
import { loginUser, logoutUser } from '../controllers/users/loginController.js';
import sanitizeRegisterInput from '../middlewares/authMiddleware/sanitizeInput.js';
import registerLimiter from '../middlewares/authMiddleware/rateLimit.js';
import {
  validateInput,
  validateLoginInput,
} from '../middlewares/authMiddleware/validateInput.js';
import {
  authMiddleware,
  adminMiddleware,
} from '../middlewares/authMiddleware/authMiddleware.js';
import { getUserData } from '../controllers/users/getUserController.js';
// import { requestPasswordReset, resetPassword } from '../controllers/users/passwordResetController.js';

const router = express.Router();

router.post(
  '/register',
  registerLimiter,
  sanitizeRegisterInput,
  validateInput(['username', 'email', 'password']),
  registerUser,
);

router.get('/user', authMiddleware, getUserData);
router.get('/verify/:token', verifyUser);
router.post('/resend-verification', resendVerificationEmail);
router.post('/login', validateLoginInput(), loginUser);
router.post('/logout', authMiddleware, logoutUser);
// router.post('/reset-password-request', requestPasswordReset);
// router.post('/reset-password/:token', resetPassword);

router.get('/admin-dashboard', authMiddleware, adminMiddleware, (req, res) => {
  res.status(200).json({ message: 'Welcome to the admin dashboard!' });
});

export default router;
