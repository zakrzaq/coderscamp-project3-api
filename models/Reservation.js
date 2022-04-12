import mongoose from 'mongoose';
const { Schema } = mongoose;

const reservationSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  date: {
    type: String,
    required: [true, 'Field date is required'],
  },
  hour: {
    type: String,
    required: [true, 'Field hour is required'],
  },
  customerName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: [true, 'Field customer last is required'],
  },
  customerPhone: {
    type: String,
    required: [true, 'Field customer telephone number is required'],
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
