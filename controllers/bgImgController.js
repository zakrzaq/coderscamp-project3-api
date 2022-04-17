import { httpStatus } from "../utils/httpStatusCode.js";
import { RestaurantBgImg } from "../models/bgImgModel.js";
import mongoose from "mongoose";

const getBgImgs = async (req, res) => {
    try {
        const bgImgs = await RestaurantBgImg.find(req.query);

        if (bgImgs.length === 0) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "No background image found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: bgImgs,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server Error",
        });
    }
};

const addBgImg = async (req, res) => {
    const bgImg = new RestaurantBgImg({
        _id: new mongoose.Types.ObjectId(),
        backgroundImage: req.file.filename,
    });
    try {
        const createdBgImg = await RestaurantBgImg.create(bgImg);

        return res.status(httpStatus.CREATED).json({
            success: true,
            data: createdBgImg,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server Error",
        });
    }
};

/*const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "user not found",
            });
        }
        return res.status(httpStatus.OK).json({
            success: true,
            data: { user },
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "user not found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: { user },
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "user not found",
            });
        }

        return res.status(httpStatus.NO_CONTENT).json({
            success: true,
            data: null,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};*/

export const restaurantBgImgController = {
    getBgImgs,
    addBgImg,
};
