import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
  }
}