import express from "express";
import { restaurantBgImgController } from "../controllers/bgImgController.js";
import { uploadBgImg } from "../controllers/multerController.js";

export const restaurantBgImgRouter = express.Router();

restaurantBgImgRouter
    .get("/", restaurantBgImgController.getBgImgs)
    .post("/", uploadBgImg, restaurantBgImgController.addBgImg)
    .get("/:id", restaurantBgImgController.getBgImgById)
    .put("/:id", uploadBgImg, restaurantBgImgController.updateBgImgById)
    .delete("/:id", restaurantBgImgController.deleteBgImgById);
