import { Restaurant } from "../models/Restaurant.js";
import mongoose from "mongoose";

const getRestaurants = async function (req, res) {
  try {
    const queryObj = { ...req.query };
    let query = Restaurant.find(queryObj);
    const restaurants = await query;

    if (restaurants.length === 0) {
      return res.status(404).json({
        success: false,
        error: "No restaurant found",
      });
    }

    return res.status(200).json({
      success: true,
      data: restaurants,
    });
  } catch (err) {
    return res.status(500).json({
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

    return res.status(201).json({
      success: true,
      data: restaurant,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

const getRestaurantById = async function (req, res) {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        error: "No restaurant found",
      });
    }
    return res.status(200).json({
      success: true,
      data: { restaurant },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

const deleteRestaurantById = async function (req, res) {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        error: "No restaurant found",
      });
    }
    await restaurant.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
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
    return res.status(200).json({
      success: true,
      data: { updatedRestaurant },
    });
  } catch (error) {
    return res.status(500).json({
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
      return res.status(404).json({
        success: false,
        error: "No restaurant found",
      });
    }

    return res.status(200).json({
      success: true,
      data: { restaurantsInChain },
    });
  } catch (error) {
    return res.status(500).json({
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
