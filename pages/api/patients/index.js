import Patient from '../../../models/Patient';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'GET') {
    try {
      const patients = await Patient.find();
      res.status(200).json(patients);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching patients', error });
    }
  } else if (req.method === 'POST') {
    const { name, age, gender, medicalHistory, insuranceInfo } = req.body;

    try {
      const patient = await Patient.create({ name, age, gender, medicalHistory, insuranceInfo });
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ message: 'Error creating patient', error });
    }
  } else if (req.method === 'DELETE') {
      const { id } = req.body;
      try {
        const patient = await Patient.findById(id);
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
        await Patient.findByIdAndDelete(id);
        res.status(200).json({ message: 'Patient deleted successfully' });
      } catch (error) {
        res.status(400).json({ message: 'Error deleting patient', error });
      }
    }
    else {
      res.status(405).json({ message: 'Method not allowed' });
    } 
}

export default authMiddleware(handler);
