import { body } from "express-validator";
const userValidation = () => {
  return [
    body("fullname")
      .notEmpty()
      .withMessage("Fullname is required")
      .isLength({ min: 3 })
      .withMessage("Fullname must be at least 3 char")
      .isLength({ max: 20 })
      .withMessage("Fullname must noe be exceed 20 char")
      .trim(),
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invaliid")
      .trim(),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 5 })
      .withMessage("Password must be atleast 5 char")
      .isLength({ max: 8 })
      .withMessage("Password must not be exceed 8 char")
      .isNumeric()
      .withMessage("Only digits are allowed"),
    body("avatr")
      .isURL()
      .withMessage("Invalid URL")
      .notEmpty()
      .withMessage("Avtar is required")
      .isMimeType()
      .withMessage("Invalid File Type"),
  ];
};

export default userValidation;
s;
