import express from "express";
import connectDB from "./db/mongoose.js";
import { testRouter } from "./routes/testRouter.js";
import { router as authRoute } from "./routes/auth.js";
import { verify } from "./routes/verifyToken.js";

const app = express();

const PORT = process.env.SERVER_PORT;

connectDB();

app.use(express.json());

app.use("/api", testRouter);
app.use("/api/user", authRoute);

// example of verification of the user
app.use("/api/dashboard", verify, (req, res) => {
    res.send("user dashboard access");
});

// example of verification of the owner
app.use("/api/owner", verify, (req, res) => {
    res.send("owner access");
});

// example of verification of the admin

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
