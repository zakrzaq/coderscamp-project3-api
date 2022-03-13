import { Restaurant } from "../models/Restaurant.js";
import mongoose from "mongoose";

const getRestaurants = async function (reqQuery) {
  try {
    const queryObj = { ...reqQuery };
    let query = Restaurant.find(queryObj);
    const restaurants = await query;
    return restaurants;
  } catch (err) {
    throw Error("Error while getting restaurants");
  }
};

const addRestaurant = async function (reqBody) {
  const restaurantToAdd = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: reqBody.name,
    address: reqBody.address,
    phone: reqBody.phone,
    restaurantChain: reqBody.restaurantChain,
  });
  try {
    const restaurant = await Restaurant.create(restaurantToAdd);
    return restaurant;
  } catch (err) {
    throw Error("Error while posting new restaurant");
  }
};

const getRestaurantById = async function (params) {
  try {
    const restaurant = await Restaurant.findById(params.id);
    return restaurant;
  } catch (err) {
    throw Error("Error while getting restaurantById");
  }
};

const deleteRestaurantById = async function (params) {
  try {
    const restaurant = await Restaurant.findById(params.id);
    return await restaurant.remove();
  } catch (err) {
    throw Error("Error while deleting restaurantById");
  }
};

const updateRestaurantById = async function (params, reqBody) {
  const restaurantToUpdate = {
    name: reqBody.name,
    address: reqBody.address,
    phone: reqBody.phone,
    restaurantChain: reqBody.restaurantChain,
  };
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      params.id,
      restaurantToUpdate
    );
    return updatedRestaurant.save();
  } catch (error) {
    throw Error("Error while editting restaurant");
  }
};

const getRestaurantsByRestaurantChainId = async function (params) {
  try {
    const restaurantsInChain = await Restaurant.find({
      restaurantChain: params.id,
    });
    return restaurantsInChain;
  } catch (error) {
    throw Error("Error while getting restaurants from restaurants chain");
  }
};

export const restaurantService = {
  getRestaurants,
  addRestaurant,
  getRestaurantById,
  deleteRestaurantById,
  updateRestaurantById,
  getRestaurantsByRestaurantChainId,
};
