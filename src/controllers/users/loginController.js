import bcrypt from 'bcrypt';
import User from '../../models/userModel.js';

export const loginUser = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        let user;
        if (email) {
            user = await User.findOne({ email });
        } else if (username) {
            user = await User.findOne({ username });
        } else {
            return res.status(400).json({ message: 'Both email/username and password are required' });
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

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};