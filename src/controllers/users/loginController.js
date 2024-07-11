import bcrypt from 'bcrypt';
import User from '../../models/userModel.js';
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
    console.log('Request body:', req.body);
    const { identifier, password } = req.body;

    try {
        let user;
        if (identifier.includes('@')) {
            user = await User.findOne({ email: identifier });
        } else {
            user = await User.findOne({ username: identifier });
        }
        if (!user) {
            return res.status(404).json({ message: 'Invalid email/username, please try again.' });
        }

        if (!user.isVerified) {
            return res.status(403).json({ message: 'Please verify your email before logging in' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const tokenPayload = { _id: user._id, isAdmin: user.isAdmin };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const logoutUser = (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
};