import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBConnect = async () => {
  try {
    const connectionString = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected",connectionString.connection.host);
  } catch (error) {
    console.error("MongoDB connection error", error);
  }
};

export default DBConnect;
