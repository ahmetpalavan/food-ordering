import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    address: {
      type: String,
      required: [true, "Please provide a address"],
    },
    job: {
      type: String,
      required: [true, "Please provide a job"],
    },
    bio: {
      type: String,
      required: [true, "Please provide a bio"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please provide a confirmPassword"],
    },
    emailVerified: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
