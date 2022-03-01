import express from "express";
import { restaurantController } from "../controllers/restaurantController.js";

export const restaurantRouter = express.Router();
restaurantRouter
  .get("/", restaurantController.getRestaurants)
  .post("/", restaurantController.addRestaurant)
  .get("/:id", restaurantController.getRestaurantById)
  .delete("/:id", restaurantController.deleteRestaurantById)
  .put("/:id", restaurantController.updateRestaurantById)

  .get(
    "/restaurantChain/:id",
    restaurantController.getRestaurantsByRestaurantChainId
  );
