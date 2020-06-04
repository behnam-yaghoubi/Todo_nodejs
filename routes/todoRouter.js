import express from "express";
const router = express.Router();
import { jwtAuth } from "../middleware/passport";
import todoController from "../controller/todoController";
import { AddTodo, EditTodo } from "../middleware/joiValidate";

router.post("/Todo", AddTodo, jwtAuth, (req, res) => {
  todoController.addTodo(req, res);
});

router.get("/Todo", jwtAuth, (req, res) => {
  todoController.getAllTodo(req, res);
});

router.put("/Todo", EditTodo, jwtAuth, (req, res) => {
  todoController.editTodo(req, res);
});

router.delete("/Todo", jwtAuth, (req, res) => {
  todoController.deleteTodo(req, res);
});

export default router;
