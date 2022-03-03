import express from "express";
import connectDB from "./db/mongoose.js";
import { testRouter } from "./routes/testRouter.js";
import { router as authRoute } from "./routes/auth.js";

const app = express();

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(express.json());

app.use("/api", testRouter);
app.use("/api/user", authRoute);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
