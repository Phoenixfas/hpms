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
  }  else if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      const ap = await Appointment.findById(id);
      if (!ap) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      await Appointment.findByIdAndDelete(id);
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error deleting appointment', error });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  } 
};

export default authMiddleware(handler);
