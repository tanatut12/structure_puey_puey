// src/middlewares/authMiddleware/sanitizeInput.js
import { body, validationResult } from 'express-validator';

const sanitizeRegisterInput = [
    body('username').trim().escape(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }).trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export default sanitizeRegisterInput;
