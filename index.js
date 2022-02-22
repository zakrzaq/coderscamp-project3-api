import express from "express";
import connectDB from "./db/mongoose.js";
import { testRouter } from "./routes/testRouter.js";

const app = express();

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(express.json());

app.use("/api", testRouter);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
