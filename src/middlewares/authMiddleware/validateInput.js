// validateInput.js
// validateInput.js
import { body } from 'express-validator';

const validateInput = fields => {
    return [
        body('email').optional().isEmail().withMessage('Invalid value for email'),
        body('username').optional().isString().withMessage('Invalid value for username'),
        body('password').exists().isString().withMessage('Password is required'),
    ];
};

export default validateInput;
