import mongoose from "mongoose";
import { db_Name } from "../constants.js";
const dbConnect = async () => {
  try {
    const dbConnect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_Name}`,
    );

    console.log(`MongoDB Connected: ${dbConnect.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error:", error);
    process.exit(1);
  }
};

export default dbConnect;
