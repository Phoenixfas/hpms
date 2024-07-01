import { verifyToken } from '../../../utils/auth';
import User from '../../../models/User';
import connectDB from '../../../utils/db';
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  origin: '*', // Allow requests from any origin
});

// Helper method to wait for middleware to execute before continuing
// and to throw an error if an error happens in middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const authMiddleware = (handler) => async (req, res) => {
  await connectDB();

  // Run CORS middleware
  await runMiddleware(req, res, cors);

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
