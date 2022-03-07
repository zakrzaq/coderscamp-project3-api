import { Restaurant } from "../models/Restaurant.js";
import { httpStatus } from "../utils/httpStatusCode.js";
import mongoose from "mongoose";

const getRestaurants = async function (req, res) {
  try {
    const queryObj = { ...req.query };
    let query = Restaurant.find(queryObj);
    const restaurants = await query;

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
  const restaurantToAdd = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    restaurantChain: req.body.restaurantChain,
  });

  try {
    const restaurant = await Restaurant.create(restaurantToAdd);

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
    const restaurant = await Restaurant.findById(req.params.id);

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
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(httpStatus.NO_CONTENT).json({
        message: "No restaurant found",
      });
    }
    await restaurant.remove();

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
  const restaurantToUpdate = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    restaurantChain: req.body.restaurantChain,
  };
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      restaurantToUpdate
    );
    updatedRestaurant.save();
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
    const restaurantsInChain = await Restaurant.find({
      restaurantChain: req.params.id,
    });

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
};
