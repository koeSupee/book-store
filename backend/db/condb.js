import mongoose from "mongoose";
import { MONGO_URI } from "../config.js";

const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log(`Mongoose connected!!!`);
    })
    .catch((error) => {
      console.log(`Error connecting to database ${error.message}`);
    });
};
export default connectDB;
