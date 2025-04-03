import { body } from "express-validator";
import { taskStatusList } from "../utils/constant";

const taskValidation = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("Task Title is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("task title must be at least 3 char")
      .isLength({ max: 20 })
      .withMessage("task title must not be exceed 20 char"),
    body("description")
      .notEmpty()
      .withMessage("task description is required")
      .trim()
      .isString()
      .withMessage("Only string is allowed")
      .isLength({ min: 3 })
      .withMessage("task description must be at least 3 char")
      .isLength({ max: 50 })
      .withMessage("task description must not be exceed 50 char"),
    body("attachments").isArray().withMessage("Attachments must be an array"),
    body("attachments.*.url").isURL().withMessage("Invalid URL Format"),
    body("attachments.*.fileType")
      .isMimeType()
      .withMessage("Invalid file type"),
    body("attachments.*.size")
      .isInt({ min: 2 * 1024 * 1024, max: 10 * 1024 * 1024 })
      .withMessage("File size must be between 2 Mb and 10 Mb"),
    body("status")
      .isString()
      .withMessage("values must be string")
      .isIn(taskStatusList)
      .withMessage(`status must be one of ${taskStatusList.join(", ")}`)
      .notEmpty()
      .withMessage("Task status is required"),
  ];
};

export default taskValidation;
