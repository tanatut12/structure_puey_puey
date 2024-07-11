import { body } from 'express-validator';

export const validateInput = fields => {
    return [
        body('email').optional().isEmail().withMessage('Invalid value for email'),
        body('username').optional().isString().withMessage('Invalid value for username'),
        body('password').exists().isString().withMessage('Password is required'),
    ];
};

export const validateLoginInput = () => {
    return [
        body('identifier')
            .notEmpty()
            .withMessage('Email or Username is required')
            .custom((value, { req }) => {
                if (!value) {
                    throw new Error('Email or Username is required');
                }
                return true;
            }),
        body('password')
            .exists()
            .withMessage('Password is required')
            .isString()
            .withMessage('Password must be a string')
    ];
};