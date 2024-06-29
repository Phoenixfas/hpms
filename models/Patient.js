import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  medicalHistory: { type: String },
  insuranceInfo: { type: String },
}, { timestamps: true });

export default mongoose.models.Patient || mongoose.model('Patient', patientSchema);
