import Patient from '../../../models/Patient';
import authMiddleware from '../auth/middleware';
import connectDB from '../../../utils/db';

const handler = async (req, res) => {
    await connectDB();

    if (req.method === 'GET') {
        const { id } = req.query;
        try {
            const patient = await Patient.findById(id);
            if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
            }
            res.status(200).json(patient);
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching patient', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    } 
}


export default authMiddleware(handler);