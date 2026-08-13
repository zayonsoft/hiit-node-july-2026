import mongoose from "mongoose";
import env from "./env.js";

const connectionUrl = env.DB_URL;

export default async function connectDb() {
  try {
    if (!connectionUrl) {
      console.log("Database Url not set!");
      process.exit(1);
    }
    await mongoose.connect(connectionUrl);
  } catch (e) {
    console.log(`An error occured: ${e}`);
    process.exit(1);
  }
}
