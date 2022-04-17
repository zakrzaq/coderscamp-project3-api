import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantBgImgSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    /*backgroundImage: {
        data: Buffer,
        contentType: String,
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant",
    },*/
});

export const restaurantBgImg = mongoose.model(
    "RestaurantBgImg",
    restaurantBgImgSchema
);
