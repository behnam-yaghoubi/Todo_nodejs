import Joi from "@hapi/joi";
import { Msg } from "../config/constants";
import { loginHandle, successHandle } from "../utils";

/**
 * @function Validate-Register
 * @param {Json} model req.body
 */
export const RegisterValidate = (req, res, next) => {
  const schema = Joi.object({
    userName: Joi.string().required().min(5).messages({
      "string.empty": "فیلد نام کاربری نمی تواند خالی باشد",
      "string.min": "حداقل طول نام کاربر 5 کاراکتر است",
    }),
    email: Joi.string().required().email().messages({
      "string.empty": "فیلد ایمیل نمی تواند خالی باشد",
      "string.email": "فرمت ایمیل وارد شده صحیح نیست",
    }),
    password: Joi.string().required().min(6).messages({
      "string.empty": "فیلد پسورد نمی تواند خالی باشد",
      "string.min": "پسورد نباید کمتر از 6 کاراکتر باشد",
    }),
  }).options({ abortEarly: false });
  schema.validate(req.body);
  let result = schema.validate(req.body);
  if (result.error) {
    return successHandle(res, 400, "error", result.error.details[0].message);
  }
  next();
  // return schema.validate(model);
};

/**
 * @function loginValidate
 * @param  {JSON} model req.body
 */
export const LoginValidate = (req, res, next) => {
  const schema = Joi.object()
    .keys({
      email: Joi.string().required().email().messages({
        "string.empty": "فیلد ایمیل نمی تواند خالی باشد",
        "string.email": "فرمت ایمیل وارد شده صحیح نیست",
      }),
      password: Joi.string().required().min(6).messages({
        "string.empty": "فیلد پسورد نمی تواند خالی باشد",
        "string.min": "پسورد نباید کمتر از 6 کاراکتر باشد",
      }),
    })
    .options({ abortEarly: false });
  schema.validate(req.body);
  let result = schema.validate(req.body);
  if (result.error) {
    return loginHandle(
      res,
      400,
      "error",
      "",
      result.error.details[0].message,
      "/login"
    );
  }
  next();
};

/**
 * @function addTodo-validate
 * @param  {JSON} model req.body
 */
export const AddTodo = (req, res, next) => {
  const schema = Joi.object().keys({
    todoName: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9]/)
      .min(3)
      .messages({
        "string.empty": "فیلد نمی تواند خالی باشد",
        "string.min": "todo نباید کمتر از 3 کاراکتر باشد",
        "string.pattern.base": "فقط شامل حروف و عدد باشد",
      }),
  });
  schema.validate(req.body);
  let result = schema.validate(req.body);
  if (result.error) {
    return successHandle(
      res,
      409,
      "error",
      result.error.details[0].message,
      {}
    );
  }
  next();
};

/**
 * @function editTodo-Validate
 * @param  {JSON} model req.body
 */
export const EditTodo = (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    Condition: Joi.string().required(),
    todoName: Joi.string()
      .required()
      .min(3)
      .regex(/^[a-zA-Z0-9]/)
      .messages({
        "string.empty": "فیلد نمی تواند خالی باشد",
        "string.min": "todo نباید کمتر از 3 کاراکتر باشد",
        "string.pattern.base": "فقط شامل حروف و عدد باشد",
      }),
  });
  schema.validate(req.body);
  let result = schema.validate(req.body);
  if (result.error) {
    return successHandle(
      res,
      400,
      "error",
      result.error.details[0].message,
      {}
    );
  }
  next();
};
