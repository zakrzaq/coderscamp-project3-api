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

const getBgImgById = async (req, res) => {
    try {
        const bgImg = await RestaurantBgImg.findById(req.params.id);
        if (!bgImg) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "background image not found",
            });
        }
        return res.status(httpStatus.OK).json({
            success: true,
            data: { bgImg },
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const updateBgImgById = async (req, res) => {
    if (req.file) req.body.backgroundImage = req.file.filename;
    try {
        const bgImg = await RestaurantBgImg.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!bgImg) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "background image not found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: { bgImg },
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const deleteBgImgById = async (req, res) => {
    try {
        const bgImg = await RestaurantBgImg.findByIdAndDelete(req.params.id);

        if (!bgImg) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "background image not found",
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
};

export const restaurantBgImgController = {
    getBgImgs,
    addBgImg,
    getBgImgById,
    updateBgImgById,
    deleteBgImgById,
};
