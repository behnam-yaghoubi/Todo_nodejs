export const JWT_SECRET = "behnamBackendDeveloper";
export const DATABASE = {
  DB_NAME: "test",
  DB_USERNAME: "postgres",
  DB_PASSWORD: "behnam",
  DB_URL: "localhost",
  DB_DIALECT: "postgres",
};
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
