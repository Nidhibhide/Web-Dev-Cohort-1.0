import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: Number, required: true},
    isVerified: { type: Boolean, default: false, required: false },
    VerificationToken: { type: String, required: false },
    VerificationExpiry: { type: Date, required: false },
    ForgotPasswordToken: { type: String, required: false },
    ForgotPasswordExpiry: { type: Date, required: false },
    username: { type: String, required: true },
    avatr: {
      type: String,
      required: true,
      default: "https://example.com/default-avatar.png",
      trim: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
