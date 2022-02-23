import mongoose from "mongoose";
import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongo database is connected");
  } catch (error) {
    console.error("mongo database connection error");
  }
};

export default connectDB;
