export const JWT_SECRET = "behnamBackendDeveloper";

export const Msg = {
  Register: "ثبت نام شما با موفقیت انجام شد",
  loginUserNotFound: [
    { message: "کاربری با این مشخصات وجود ندارد", path: ["email"] },
  ],
  loginSuccess: [{ message: "شما با موفقیت وارد شدید.", path: ["success"] }],
  passwordIncorrect: [{ message: "پسورد اشتباه است", path: ["password"] }],
  duplicate: "اطلاعات وارد شده تکراری است",
  success: "درخواست شما با موفقیت انجام شد",
  error: "درخواست شما پاسخی ندارد",
};
export const dbMsgError = (name, length) => {
  const msg = {
    NotNullField: `فیلد ${name} نمی تواند خالی باشد`,
    LessThan: `فیلد ${name} نیتواند کمتر از ${length} کاراکتر باشد`,
    FormatValidation: `فرمت فیلد ${name} به درستی وارد نشده است`,
  };
  return msg;
};
