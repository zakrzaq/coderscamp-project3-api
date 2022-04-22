<<<<<<< HEAD
import express from 'express';
import connectDB from './db/mongoose.js';
import { router as authRoute } from './routes/auth.js';
import { userRouter } from './routes/userRouter.js';
import { tableRouter } from './routes/tableRouter.js';
import { restaurantRouter } from './routes/restaurantRouter.js';
import { restaurantChainsRouter } from './routes/restaurantChainsRouter.js';
import { logoRouter } from './routes/logoRouter.js';
import morgan from 'morgan';
=======
import express from "express";
import connectDB from "./db/mongoose.js";
import { router as authRoute } from "./routes/auth.js";
import { userRouter } from "./routes/userRouter.js";
import { tableRouter } from "./routes/tableRouter.js";
import { restaurantRouter } from "./routes/restaurantRouter.js";
import { restaurantChainsRouter } from "./routes/restaurantChainsRouter.js";
import { reservationRouter } from "./routes/reservationRouter.js";

import morgan from "morgan";
import cors from "cors";
>>>>>>> d4997ec375f47cafdc3e002eec86f9c62798d489

const app = express();
app.use(morgan('dev'));

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

<<<<<<< HEAD
app.use('/user', authRoute);
app.use('/user', userRouter);
app.use('/restaurant', restaurantRouter);
app.use('/tables', tableRouter);
app.use('/restaurantsChains', restaurantChainsRouter);
app.use('/logo', logoRouter);
=======
app.use("/user", authRoute);
app.use("/user", userRouter);
app.use("/restaurant", restaurantRouter);
app.use("/tables", tableRouter);
app.use("/restaurantsChains", restaurantChainsRouter);
app.use("/reservations", reservationRouter);

>>>>>>> d4997ec375f47cafdc3e002eec86f9c62798d489

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
