import User from "./UserModel.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import UserModel from "./UserModel.js";
import responseFun from "./utils/responseFun.js";
import {
  mailOptions,
  transporterFun,
  mailOptionsForreset,
} from "./utils/sendEmail.js";
import { OTPGenerate, expireTime } from "./utils/UserFun.js";

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return responseFun(res, 400, "User already exists ", false);
    }
    const user = await User.create({
      name,
      email,
      password,
      role,
    });
    if (!user) {
      return responseFun(res, 400, "User not created", false);
    }

    const otp = OTPGenerate();
    console.log(otp);
    user.otp = otp;

    const hashedPass = await bcrypt.hash(password, 10);
    user.password = hashedPass;

    const time = expireTime();
    console.log(time);
    user.expireTime = time;
    await user.save();

    await nodemailer.createTestAccount();

    const transporter = transporterFun();

    await transporter.sendMail(mailOptions(email, otp));

    responseFun(res, 201, "New user created ", true);
  } catch (error) {
    responseFun(res, 400, "User not created", false);
  }
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return responseFun(res, 400, "Token not found", false);
    }

    const user = await UserModel.findOne({ verificationToken: token });
    if (!user) {
      return responseFun(res, 400, "User not found", false);
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    responseFun(res, 200, "User verified successfully", true);
  } catch (error) {
    responseFun(res, 400, "User not verified", false);
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return responseFun(res, 400, "User not found", false);
    }
    const expireTime = user.expireTime;
    const currentTime = new Date();

    if (currentTime > expireTime) {
      return responseFun(res, 400, "OTP is expired", false);
    }

    if (otp != user.otp) {
      return responseFun(res, 400, "Incorrect OTP", false);
    }

    user.isVerified = true;
    await user.save();

    return responseFun(res, 200, "Otp verified successfully", true);
  } catch (error) {
    responseFun(res, 400, "Otp not verified", false);
  }
};

const login = async (req, res) => {
  //install jswt token and cookie
  //generate cookie and set in cookie
  try {
    const { password, email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return responseFun(res, 400, "User not found", false);
    }

    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return responseFun(res, 400, "Incorrect password", false);
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    //set token in cookie
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    return responseFun(
      res,
      200,
      "Login successful",
      true,
      user.isVerified,
      token
    );
  } catch (error) {}
};

const resendOTP = async (req, res) => {
  //user enter email
  //generate otp and store into db

  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return responseFun(res, 400, "User not found", false);
    }

    const otp = OTPGenerate();
    console.log(otp);
    user.otp = otp;

    const hashedPass = await bcrypt.hash(password, 10);
    user.password = hashedPass;

    const time = expireTime();
    console.log(time);
    user.expireTime = time;
    await user.save();

    await nodemailer.createTestAccount();

    const transporter = transporterFun();

    await transporter.sendMail(mailOptions(email, otp));

    responseFun(res, 201, "resend OTP Successfully ", true);
  } catch (error) {}
};

//only user can see
const getMe = async (req, res) => {
  try {
    const user = req.user.id;
    console.log("user = " + user);

    if (!user) {
      return responseFun(res, 400, "Profile not found", false);
    }
    return responseFun(res, 200, "Profile found", true);
  } catch (error) {}
};

const logOut = async (req, res) => {
  try {
    res.cookie("token", "", {});
    const token = req.cookies?.token;

    return responseFun(res, 200, "Logout successfully", true);
  } catch (error) {}
};

const changePassword = async (req, res) => {
  try {
    const { oldPass, newPass } = req.body;
    const id = req.user?.id;

    if (!newPass || !oldPass) {
      return responseFun(res, 400, "All fields are required");
    }

    const user = await UserModel.findById(id);
    if (!user) {
      return responseFun(res, 200, "User not found", false);
    }

    const isMatch = await bcrypt.compare(oldPass, user.password);

    if (!isMatch) {
      return responseFun(res, 400, "Old password incorrect",false);
    }

    const hashedPass = await bcrypt.hash(newPass, 10);
    user.password = hashedPass;

    return responseFun(res, 200, "Password changed successfully", true);
  } catch (error) {}
};

const forgotPass = async (req, res) => {
  try {
    console.log("entered in api");
    const { email } = req.body;

    if (!email) {
      return responseFun(res, 400, "Email is required", false);
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return responseFun(res, 400, "User not found", false);
    }

    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.resetPasswordToken = token;
    const time = expireTime();
    user.resetPasswordExpire = time;
    await user.save();

    await nodemailer.createTestAccount();

    const transporter = transporterFun();

    await transporter.sendMail(mailOptionsForreset(email, token));

    return responseFun(
      res,
      200,
      "Verification link send to ur email-ID click to reset Password",
      true
    );
  } catch (error) {}
};

const resetPass = async (req, res) => {
  const token = req.params.id;
  const { password } = req.body;

  if (!token) {
    return responseFun(res, 400, "Token not found", false);
  }
  const user = await UserModel.findOne({
    resetPasswordToken: token,
  });
  if (!user) {
    return responseFun(res, 400, "User not found", false);
  }
  const expireTime = user.resetPasswordExpire;
  const currentTime = new Date();

  if (currentTime > expireTime) {
    return responseFun(res, 400, "reset token is expired", false);
  }

  user.resetPasswordToken = undefined;
  await user.save();

  const hashedPass = await bcrypt.hash(password, 10);
  user.password = hashedPass;
  await user.save();
  responseFun(res, 201, "Password reset sucessfully", true);
};
export {
  registerUser,
  verifyUser,
  verifyOTP,
  login,
  getMe,
  logOut,
  resendOTP,
  changePassword,
  forgotPass,
  resetPass,
};
