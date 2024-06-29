import { verifyToken } from '../../../utils/auth';
import User from '../../../models/User';
import connectDB from '../../../utils/db';

const authMiddleware = (handler) => async (req, res) => {
  await connectDB();
  
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: 'Unauthorized' });

    req.user = user;
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
