import dotenv from "dotenv/config";
import express from "express";
import connectDB from "./db/mongoose.js";

const app = express();

const PORT = process.env.SERVER_PORT;

connectDB();

app.get("/api/test", async (req, res) => {
  return res.json({
    status: 200,
    message: "Got data from API",
  });
});

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
