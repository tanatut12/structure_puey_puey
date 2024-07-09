// src/middlewares/authMiddleware/rateLimit.js
import rateLimit from 'express-rate-limit';

const registerLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 10, 
    message: 'Too many accounts created from this IP, please try again after 15 minutes'
});

export default registerLimiter;
