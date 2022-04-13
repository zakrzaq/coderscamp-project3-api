import { httpStatus } from "../utils/httpStatusCode.js";
import { restaurantService } from "../services/restaurantService.js";
import multer from "multer";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/restaurantImgs");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `restaurant-${Date.now()}.${ext}`);
    },
});

// test if file is an img
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb(new Error("Not an image"), false);
    }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const uploadBgImg = upload.single("bgImg");

const getRestaurants = async function (req, res) {
    try {
        const restaurants = await restaurantService.getRestaurants(req.query);

        if (restaurants.length === 0) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "No restaurant found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: restaurants,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server Error",
        });
    }
};

const addRestaurant = async function (req, res) {
    console.log(req.body);
    try {
        const restaurant = await restaurantService.addRestaurant(req.body);

        return res.status(httpStatus.CREATED).json({
            success: true,
            data: restaurant,
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server Error",
        });
    }
};

const getRestaurantById = async function (req, res) {
    try {
        const restaurant = await restaurantService.getRestaurantById(
            req.params
        );
        if (!restaurant) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "id not found.",
            });
        }
        return res.status(httpStatus.OK).json({
            success: true,
            data: { restaurant },
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const deleteRestaurantById = async function (req, res) {
    try {
        await restaurantService.deleteRestaurantById(req.params);

        return res.status(httpStatus.NO_CONTENT).json({
            success: true,
            data: {},
        });
    } catch (err) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const updateRestaurantById = async function (req, res) {
    console.log(req.body);
    try {
        const updatedRestaurant = await restaurantService.updateRestaurantById(
            req.params,
            req.body
        );
        return res.status(httpStatus.OK).json({
            success: true,
            data: { updatedRestaurant },
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

const getRestaurantsByRestaurantChainId = async function (req, res) {
    try {
        const restaurantsInChain =
            await restaurantService.getRestaurantsByRestaurantChainId(
                req.params
            );

        if (restaurantsInChain.length === 0) {
            return res.status(httpStatus.NO_CONTENT).json({
                message: "No restaurant chain found",
            });
        }

        return res.status(httpStatus.OK).json({
            success: true,
            data: { restaurantsInChain },
        });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            success: false,
            error: "Server error",
        });
    }
};

export const restaurantController = {
    getRestaurants,
    addRestaurant,
    getRestaurantById,
    deleteRestaurantById,
    updateRestaurantById,
    getRestaurantsByRestaurantChainId,
    uploadBgImg,
};
