import express from "express";
import { userController } from "../controllers/userController.js";
import { verify } from "./verifyToken.js";
import { roles } from "./roles.js";
import { setUser, authRole } from "./rolesAuth.js";

export const userRouter = express.Router();

userRouter
    .get("/", verify, setUser, authRole(roles.ADMIN), userController.getUsers)
    .get(
        "/:id",
        verify,
        setUser,
        authRole(roles.ADMIN),
        userController.getUserById
    )
    .put("/:id", verify, userController.updateUserById)
    .delete("/:id", verify, userController.deleteUserById);
