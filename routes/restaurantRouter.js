import express from "express";
import { verify } from "./verifyToken.js";
import { roles } from "./roles.js";
import { setUser, authRole } from "./rolesAuth.js";
import { restaurantController } from "../controllers/restaurantController.js";
import {
    validateRestaurant,
    validateRestaurantId,
} from "../utils/restaurantValidation.js";

export const restaurantRouter = express.Router();
restaurantRouter
    .get("/", restaurantController.getRestaurants)
    .post(
        "/",
        verify,
        setUser,
        authRole(roles.ADMIN),
        validateRestaurant,
        restaurantController.addRestaurant
    )
    .get("/:id", validateRestaurantId, restaurantController.getRestaurantById)
    .delete(
        "/:id",
        verify,
        setUser,
        authRole(roles.ADMIN),
        validateRestaurantId,
        restaurantController.deleteRestaurantById
    )
    .put(
        "/:id",
        verify,
        setUser,
        authRole(roles.ADMIN),
        validateRestaurantId,
        validateRestaurant,
        restaurantController.updateRestaurantById
    )
    .get(
        "/restaurantChain/:id",
        restaurantController.getRestaurantsByRestaurantChainId
    );
