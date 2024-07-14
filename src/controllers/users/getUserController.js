import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';

export const getUserData = async (req, res) => {
  try {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded._id; 


    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid token' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};
