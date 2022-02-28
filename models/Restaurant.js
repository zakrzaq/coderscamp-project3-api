import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 255,
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    post_code: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  restaurantChain: {
    type: Schema.Types.ObjectId,
    ref: "RestaurantChain",
  },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
