import express from "express";
const router = express.Router();

import userRouter from "./userRouter";
import todoRouter from "./todoRouter";

router.use("/", todoRouter);
router.use("/user", userRouter);

export default router;
