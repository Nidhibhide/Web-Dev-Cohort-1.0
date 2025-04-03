import { body } from "express-validator";

const subTaskValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("subTask Title is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("subTask title must be at least 3 char")
      .isLength({ max: 20 })
      .withMessage("subTask title must not be exceed 20 char"),
    body("isCompleted")
      .isEmpty()
      .withMessage("Iscompleted field is required")
      .isBoolean()
      .withMessage("value must be true or false"),
  ];
};
export default subTaskValidation;
