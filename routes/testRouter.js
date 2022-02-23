import express from "express";
import { testController } from "../controllers/testController.js";

export const testRouter = express.Router();

testRouter.get("/test", testController.getTest);

testRouter.post("/test", testController.createTest);
