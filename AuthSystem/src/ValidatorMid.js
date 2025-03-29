import {
  userRegisterValidation,
  VerifyOTP,
  Login,
} from "./utils/UserValidation.js";

import responseFun from "./utils/responseFun.js";

const userRegisterMid = (req, res, next) => {
  const { error } = userRegisterValidation.validate(req.body);

  if (error) {
    return responseFun(res, 400, "Error in userRegisterMid ", false);
  }
  next();
};
const LoginValidtorMid = (req, res, next) => {
  const { error } = Login.validate(req.body);

  if (error) {
    return responseFun(res, 400, "Error in userLoginMid ", false);
  }
  next();
};

const VerifyOTPMid = (req, res, next) => {
  const { error } = VerifyOTP.validate(req.body);

  if (error) {
    return responseFun(res, 400, "Error in VerifyOTPMid ", false);
  }
  next();
};
export { VerifyOTPMid, userRegisterMid, LoginValidtorMid };
