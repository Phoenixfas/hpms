import Appointment from '../../../models/Appointment';
import ClinicalDocument from '../../../models/ClinicalDocument';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'GET') {
    try {
      const appointmentCount = await Appointment.countDocuments();
      const documentCount = await ClinicalDocument.countDocuments();
      
      res.status(200).json({
        appointmentCount,
        documentCount,
      });
    } catch (error) {
      res.status(400).json({ message: 'Error generating report', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default authMiddleware(handler);
