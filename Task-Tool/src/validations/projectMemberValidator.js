import { body } from "express-validator";
import { rolesList } from "../utils/constant";

const projectMemberValidator = () => {
  return [
    body("role")
      .isString()
      .withMessage("values must be string")
      .isIn(rolesList)
      .withMessage(`status must be one of ${rolesList.join(", ")}`)
      .notEmpty()
      .withMessage("role is required"),
  ];
};

export default projectMemberValidator;
