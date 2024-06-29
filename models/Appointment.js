import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  date: { type: Date, required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  notes: { type: String },
}, { timestamps: true });

export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);
