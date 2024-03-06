import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.model.js";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});

app.use("/api/user", userRouter);
