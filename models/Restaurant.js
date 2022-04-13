import mongoose from "mongoose";
const { Schema } = mongoose;

const restaurantSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "Field name is requied"],
        minLength: 2,
        maxLength: 255,
    },
    address: {
        street: {
            type: String,
            required: [true, "Field street is requied"],
        },
        number: {
            type: Number,
            required: [true, "Field number is requied"],
        },
        post_code: {
            type: String,
            required: [true, "Field post_code is requied"],
        },
        city: {
            type: String,
            required: [true, "Field city is requied"],
        },
    },
    phone: {
        type: Number,
        required: [true, "Field phone is requied"],
    },
    /*backgroundImage: {
        data: Buffer,
        contentType: String,
    },*/
    restaurantChain: {
        type: Schema.Types.ObjectId,
        ref: "RestaurantsChains",
    },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
