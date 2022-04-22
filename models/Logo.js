import mongoose from 'mongoose';
const { Schema } = mongoose;

const logoSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Field name is required'],
  },
  image: {
    type: String,
  },
});

export const Logo = mongoose.model('Logo', logoSchema);
