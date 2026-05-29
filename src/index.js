import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h2>Hello, from Node server!</h2>");
  res.status(200);
});

app.listen(PORT, () => {
  console.log(`PORT is listening at ${PORT}`);
  connectDB();
});
