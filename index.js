import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import cookieParser from "cookie-parser";
import passport from "passport";

import Router from "./routes/index"; // import master router

const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use("/", Router);

app.listen(3000, function () {
  console.log("listening on 3000");
});

export default app;
