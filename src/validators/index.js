import { body } from "express-validator";
import { AvailableUserRole, AvailableTaskStatus } from "../utils/constants.js";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLowercase()
      .withMessage("Username must be in lower case")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required"),
    body("fullName")
      .optional()
      .trim(),
  ];
};

const userLoginValidator = () => {
    return[
        body("email")
        .optional()
        .isEmail()
        .withMessage("Email is invalid"),
        body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),
    ];
};

const userChangeCurrentPassword = () => {
    return[
        body("oldPassword")
        .trim()
        .notEmpty()
        .withMessage("Old password is required"),
        body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("New password is required"),
    ];
};

const userForgotPasswordValidator = () => {
    return[
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),
    ];
};

const userResetForgotPasswordValidator = () => {
    return[
        body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("Password is required"),
    ];
};


const createProjectValidator = () => {
    return [
        body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),
        body("description")
        .optional()
        .trim(),
    ];
};

const addMembertoProjectValidator = () => {
    return [
        body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),
        body("role")
        .optional()
        .isIn(AvailableUserRole)
        .withMessage("Role is invalid"),
    ];
};


const createTaskValidator = () => {
    return [
        body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),
        body("description")
        .optional()
        .trim(),
        body("status")
        .optional()
        .isIn(AvailableTaskStatus)
        .withMessage("Status is invalid"),
    ];
};

const createSubTaskValidator = () => {
    return [
        body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),
    ];
};


const createNoteValidator = () => {
    return [
        body("content")
        .trim()
        .notEmpty()
        .withMessage("Content is required"),
    ];
};


export { userRegisterValidator , userLoginValidator, userChangeCurrentPassword, userForgotPasswordValidator, userResetForgotPasswordValidator, createProjectValidator, addMembertoProjectValidator, createTaskValidator, createSubTaskValidator, createNoteValidator,  };
