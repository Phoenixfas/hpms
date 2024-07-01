import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import connectDB from '../../../utils/db';
import corsMiddleware from '../../../utils/corsMiddleware';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'POST') {
    const { username, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await User.create({ username, password: hashedPassword, role });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default corsMiddleware(handler);