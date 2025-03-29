import {
  registerUser,
  verifyOTP,
  verifyUser,
  login,
  getMe,
  logOut,
  resendOTP,
  changePassword,
  forgotPass,
  resetPass,
} from "./controller.js";
import express from "express";
import IsLoggeedIn from "./Auth.js";
import RolesMid from "./RolesMid.js";
import {
  userRegisterMid,
  VerifyOTPMid,
  LoginValidtorMid,
} from "./ValidatorMid.js";

const router = express.Router();

router.post("/register", userRegisterMid, registerUser);
router.get("/verify/:token", verifyUser);
router.post("/verifyOTP", VerifyOTPMid, verifyOTP);
router.post("/login", LoginValidtorMid, login);
router.get("/getMe", IsLoggeedIn, RolesMid("user"), getMe);
router.get("/logout", IsLoggeedIn, logOut);
router.get("/resendOtp", resendOTP);
router.post("/changePass", IsLoggeedIn, changePassword);
router.post("/forgotPass", forgotPass);
router.put("/reset/:id", resetPass);

export default router;
