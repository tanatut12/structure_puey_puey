import bcrypt from 'bcrypt';
import crypto from 'crypto';
import User from '../../models/userModel.js';
import { sendVerificationEmail } from '../../utils/email.js';

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        const verificationToken = crypto.randomBytes(20).toString('hex');
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpires: Date.now() + 3600000, 
        });
        await newUser.save();

        console.log(`New user registered with token: ${verificationToken}`);

        await sendVerificationEmail(newUser.email, verificationToken);

        res.status(201).json({ message: 'User registered successfully. Check your email for verification.' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const verifyUser = async (req, res) => {
    const { token } = req.params;

    try {
        console.log(`Token received for verification: ${token}`);

        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            console.log(`Invalid token during verification: ${token}`);
            return res.status(400).json({ message: 'Invalid token' });
        }

        if (user.verificationTokenExpires < Date.now()) {
            console.log(`Expired token during verification: ${token}`);
            return res.status(400).json({ message: 'Expired token' });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        console.log(`User verified successfully: ${user.email}`);
        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error('Error verifying user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const resendVerificationEmail = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.isVerified) {
            return res.status(400).json({ message: 'User is already verified' });
        }

        const newVerificationToken = crypto.randomBytes(20).toString('hex');

        user.verificationToken = newVerificationToken;
        user.verificationTokenExpires = Date.now() + 3600000; 
        await user.save();

        console.log(`Resent verification token: ${newVerificationToken}`);

        await sendVerificationEmail(user.email, newVerificationToken);

        res.status(200).json({ message: 'Verification email resent successfully' });
    } catch (error) {
        console.error('Error resending verification email:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};