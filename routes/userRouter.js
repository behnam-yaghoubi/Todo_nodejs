import express from "express";
const router = express.Router();
import userController from "../controller/userController";
import { RegisterValidate, LoginValidate } from "../middleware/joiValidate";

router.post("/register", RegisterValidate, (req, res) => {
  console.log('router');
  
  userController.registerController(req, res);
});

router.post("/login", LoginValidate, (req, res) => {
  userController.loginController(req, res);
});

export default router;
