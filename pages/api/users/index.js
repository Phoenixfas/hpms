import User from '../../../models/User';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching users', error });
    }
  } else if (req.method === 'DELETE') {
      const { id } = req.body;
      try {
        const user = await User.findById(id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
      }
    }
    else {
      res.status(405).json({ message: 'Method not allowed' });
    } 
}

export default authMiddleware(handler);
