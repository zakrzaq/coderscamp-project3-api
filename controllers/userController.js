import { httpStatus } from "../utils/httpStatusCode.js";
import { User } from "../models/userModel.js";

const getUsers = async (req, res) => {
    try {
        const users = await User.find(req.query);

        if (users.length === 0) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "No users found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: users,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server Error",
        });
    }
};

const getUserById = async (req, res) => {
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
};

export const userController = {
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};
