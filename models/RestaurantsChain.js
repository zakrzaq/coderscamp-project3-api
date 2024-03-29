import mongoose from 'mongoose';
const { Schema } = mongoose;

const restaurantSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: [true, 'Field name is required'],
  },
  manager: {
    type: String,
    required: [true, 'Field manager is required'],
  },
});

export const RestaurantsChain = mongoose.model('RestaurantsChain', restaurantSchema);
