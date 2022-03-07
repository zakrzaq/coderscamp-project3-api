import mongoose, { Schema } from "mongoose";

const tableSchema = new Schema({
  id: Schema.Types.ObjectId,
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