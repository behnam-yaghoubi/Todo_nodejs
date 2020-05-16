import Joi from "@hapi/joi";
export const Validate = (model) => {
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
  return schema.validate(model);
};
export const loginValidate = (model) => {
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
  return schema.validate(model);
};

export const addTodo = (model) => {
  const todo = Joi.object().keys({
    todoName: Joi.string()
      .required()
      .regex(/^[a-zA-Z)-9]/)
      .min(3)
      .messages({
        "string.empty": "فیلد نمی تواند خالی باشد",
        "string.min": "todo نباید کمتر از 3 کاراکتر باشد",
        "string.pattern.base": "فقط شامل حروف و عدد باشد",
      }),
  });
  return todo.validate(model);
};
export const editTodo = (model) => {
  const todo = Joi.object().keys({
    id: Joi.number().required(),
    Condition: Joi.string().required(),
    todoName: Joi.string()
      .required()
      .min(3)
      .regex(/^[a-zA-Z)-9]/)
      .messages({
        "string.empty": "فیلد نمی تواند خالی باشد",
        "string.min": "todo نباید کمتر از 3 کاراکتر باشد",
        "string.pattern.base": "فقط شامل حروف و عدد باشد",
      }),
  });
  return todo.validate(model);
};
