import express from "express";
import connectDB from "./db/mongoose.js";
import { testRouter } from "./routes/testRouter.js";
import { restaurantRouter } from "./routes/restaurantRouter.js";

const app = express();

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(express.json());

app.use("/api", testRouter);
app.use("/restaurant", restaurantRouter);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
