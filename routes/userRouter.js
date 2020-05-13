import express from "express";
const router = express.Router();
import userController from "../controller/userController";

router.post("/register", (req, res) => {
  userController.registerController(req, res);
});

router.post("/login", (req, res) => {
  userController.loginController(req, res);
});

export default router;
