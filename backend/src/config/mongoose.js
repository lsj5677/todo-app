import mongoose from "mongoose";
import "dotenv/config";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Sucessfully connected to mongo");
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};
