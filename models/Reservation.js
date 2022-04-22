import mongoose from 'mongoose';
const { Schema } = mongoose;

const reservationSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  booking: {
    date: {
      type: String,
      required: [true, 'Reservation date is required'],
    },
    hour: {
      type: String,
      required: [true, 'Reservation hour is required'],
    },
  },
  customer: {
    name: {
      type: String,
      required: [true, 'Customer name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Customer last name is required'],
    },
    phone: {
      type: String,
      required: [true, 'Customer telephone number is required'],
    },
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
