import ClinicalDocument from '../../../models/ClinicalDocument';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
  await connectDB();
  
  if (req.method === 'GET') {
    try {
      const documents = await ClinicalDocument.find().populate('patient').populate('doctor');
      res.status(200).json(documents);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching documents', error });
    }
  } else if (req.method === 'POST') {
    const { patient, doctor, notes, diagnosis, treatmentPlan, labResults } = req.body;

    try {
      const document = await ClinicalDocument.create({ patient, doctor, notes, diagnosis, treatmentPlan, labResults });
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ message: 'Error creating document', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default authMiddleware(handler);
