import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

export const Test = mongoose.model("Test", testSchema);
