import Appointment from '../../../models/Appointment';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'GET') {
    try {
      const appointments = await Appointment.find().populate('patient').populate('doctor');
      res.status(200).json(appointments);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching appointments', error });
    }
  } else if (req.method === 'POST') {
    const { patient, date, doctor, notes } = req.body;

    try {
      const appointment = await Appointment.create({ patient, date, doctor, notes });
      res.status(201).json(appointment);
    } catch (error) {
      res.status(400).json({ message: 'Error creating appointment', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default authMiddleware(handler);
