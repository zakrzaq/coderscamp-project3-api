import express from "express";
import { restaurantController } from "../controllers/restaurantController.js";
import {
  validateRestaurant,
  validateRestaurantId,
} from "../utils/restaurantValidation.js";

export const restaurantRouter = express.Router();
restaurantRouter
  .get("/", restaurantController.getRestaurants)
  .post("/", validateRestaurant, restaurantController.addRestaurant)
  .get("/:id", validateRestaurantId, restaurantController.getRestaurantById)
  .delete(
    "/:id",
    validateRestaurantId,
    restaurantController.deleteRestaurantById
  )
  .put(
    "/:id",
    validateRestaurantId,
    validateRestaurant,
    restaurantController.updateRestaurantById
  )

  .get(
    "/restaurantChain/:id",
    restaurantController.getRestaurantsByRestaurantChainId
  );
