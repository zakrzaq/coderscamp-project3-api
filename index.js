import express from "express";
import connectDB from "./db/mongoose.js";
import { router as authRoute } from "./routes/auth.js";
import { userRouter } from "./routes/userRouter.js";
import { tableRouter } from "./routes/tableRouter.js";
import { restaurantRouter } from "./routes/restaurantRouter.js";
import { reservationRouter } from "./routes/reservationRouter.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/user", authRoute);
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/tables", tableRouter);
app.use("/reservations", reservationRouter);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
