import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import cookieParser from "cookie-parser";
import passport from "passport";
const port = 3000;
import Router from "./routes/index"; // import master router
import Joi from "./middleware/joiValidate";
const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/", Router);

app.listen(port, () =>
  console.log(`Todo app listening at http://localhost:${port}`)
);

export default app;
