// src/middlewares/authMiddleware/rateLimit.js
import rateLimit from 'express-rate-limit';

const registerLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 registration requests per windowMs
    message: 'Too many accounts created from this IP, please try again after 15 minutes'
});

export default registerLimiter;
