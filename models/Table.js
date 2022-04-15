import mongoose from "mongoose";
const { Schema } = mongoose;

const tableSchema = new mongoose.Schema({
  id: Schema.Types.ObjectId,
  restaurantId: { type: String },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  numberOfSeats: {
    type: Number,
    required: true,
  },
  withChild: {
    type: Boolean,
    required: true,
  },
});

export const Table = mongoose.model("Table", tableSchema);