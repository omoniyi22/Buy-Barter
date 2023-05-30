import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: false },
  category: { type: String, required: false },
  image: { type: Number, required: false },
  location: { type: String, require: false },
  user_type: { type: String, default: "user", required: true },
  user: { type: String, default: "user", required: true },
});
export const ProductModel = mongoose.model("Product", ProductSchema)