import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded Token:', decoded); // Log the decoded token for debugging
        req.user = decoded;

        next();
    } catch (error) {
        console.error('Token Verification Error:', error); // Log error for debugging
        res.status(400).json({ message: 'Invalid token' });
    }
};


export const adminMiddleware = (req, res, next) => {
    if (!req.user?.isAdmin) {
        return res.status(403).json({ message: 'Access Denied. Admins only.' });
    }

    next();
};
