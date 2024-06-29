import mongoose from 'mongoose';

const clinicalDocumentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: { type: String, required: true },
  diagnosis: { type: String },
  treatmentPlan: { type: String },
  labResults: { type: String },
}, { timestamps: true });

export default mongoose.models.ClinicalDocument || mongoose.model('ClinicalDocument', clinicalDocumentSchema);
