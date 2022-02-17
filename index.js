require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.SERVER_PORT;

app.get("/api/test", async (req, res) => {
  return res.json({
    status: 200,
    message: "Got data from API",
  });
});

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
