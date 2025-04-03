import { body } from "express-validator";

const notesValidation = () => {
  return [
    body("content")
      .notEmpty()
      .withMessage("Notes content is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("Notes content must be at least 3 char")
      .isLength({ max: 50 })
      .withMessage("Notes content must not be exceed 50 char"),
  ];
};

export default notesValidation;