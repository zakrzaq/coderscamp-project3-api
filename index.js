import express from "express";
import connectDB from "./db/mongoose.js";
import { router as authRoute } from "./routes/auth.js";
import { userRouter } from "./routes/userRouter.js";
import { tableRouter } from "./routes/tableRouter.js";
import { restaurantRouter } from "./routes/restaurantRouter.js";
import morgan from "morgan";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log(socket.id);
});

const PORT = process.env.SERVER_PORT;

httpServer.listen(80);

const app = express();
app.use(morgan("dev"));

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/user", authRoute);
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/tables", tableRouter);

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
