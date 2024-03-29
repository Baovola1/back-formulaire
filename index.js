import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

//Configuration
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//CONNEXION mongoDB
mongoose
  .connect(process.env.MONGO_URL || 3000)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

  app.listen(process.env.PORT, () => {
    console.log("Server is running!!");
  });

  app.use('/user', userRouter);