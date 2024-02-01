import mongoose from "mongoose";
import { env } from "./env.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(env.database_url);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};

connectDatabase().catch((error) => console.log(error));
