import { Restaurant } from "../models/Restaurant.js";
import mongoose from "mongoose";

const getAllRestaurants = async function (req, res) {
  try {
    const restaurants = await Restaurant.find();
    res.send(restaurants);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addRestaurant = async function (req, res) {
  const restaurant = new Restaurant({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    restaurantChain: req.body.restaurantChain,
  });

  try {
    await restaurant.save();
    res.send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getRestaurantById = async function (req, res) {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteRestaurantById = async function (req, res) {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);
    res.status(200).end();
  } catch (error) {
    res.status(400).send(error);
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
    res.send(updatedRestaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getRestaurantByQuery = async function (req, res) {
  const name = req.query.name || "";
  const city = req.query.city || "";
  let query = {
    $or: [{ "address.city": city }, { name: name }],
  };

  try {
    const restaurants = await Restaurant.find(query)
      .populate("restaurantChain", "name")
      .exec();
    res.send(restaurants);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getRestaurantsByRestaurantChainId = async function (req, res) {
  try {
    const docs = await Restaurant.find({
      restaurantChain: req.params.id,
    }).exec();
    res.send(docs);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const restaurantController = {
  getAllRestaurants,
  addRestaurant,
  getRestaurantById,
  deleteRestaurantById,
  updateRestaurantById,
  getRestaurantByQuery,
  getRestaurantsByRestaurantChainId,
};
