import Joi from "joi";
import responseFun from "../utils/responseFun.js";

const userRegisterValidation = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z]+$/) //only alphabates
    .min(3)
    .max(50)
    .required(),

  email: Joi.string().email().required(),

  password: Joi.string().min(5).max(10).pattern(/^\d+$/).required(),

  role: Joi.string().valid("user", "admin").required(),
});

const VerifyOTP = Joi.object({
  otp: Joi.number().integer().min(100000).max(999999).required(),
  email: Joi.string().email().required(),
});

const Login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(10).pattern(/^\d+$/).required(),
});



export { VerifyOTP, userRegisterValidation, Login };
