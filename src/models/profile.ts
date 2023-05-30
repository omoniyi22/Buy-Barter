import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  phoneNumber: { type: Number, required: false },
  location: { type: String, require: false },
  email: { type: String, required: true },
  user_type: { type: String, default: "user", required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false }
  },
});
export const UserModel = mongoose.model("User", UserSchema);