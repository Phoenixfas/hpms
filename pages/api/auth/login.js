import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import { generateToken } from '../../../utils/auth';
import connectDB from '../../../utils/db';

export default async function handler(req, res) {
  await connectDB();
  
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

      const token = generateToken(user);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: 'Error logging in', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
