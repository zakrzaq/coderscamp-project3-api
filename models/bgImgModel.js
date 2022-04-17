import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantBgImgSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    backgroundImage: {
        type: String,
    },

    /*
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },*/
});

export const RestaurantBgImg = mongoose.model(
    "RestaurantBgImg",
    restaurantBgImgSchema
);
