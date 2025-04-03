import { body } from "express-validator";

const projectValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Project Title is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("project title must be at least 3 char")
      .isLength({ max: 20 })
      .withMessage("project title must not be exceed 20 char"),
    body("description")
      .notEmpty()
      .withMessage("Project description is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("project description must be at least 3 char")
      .isLength({ max: 50 })
      .withMessage("project description must not be exceed 50 char"),
  ];
};

export default projectValidation;