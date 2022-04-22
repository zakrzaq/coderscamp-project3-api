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
  restaurants: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
});

export const RestaurantsChain = mongoose.model('RestaurantsChain', restaurantSchema);
