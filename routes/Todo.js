const express = require("express");
const router = express.Router();

const passport = require("passport");
require("../middleware/passport")(passport);

const todoController = require("../controller/todoController");

router.post(
  "/Todo",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    todoController.addTodo(req, res);
  }
);

router.get(
  "/Todo",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    todoController.getAllTodo(req, res);
  }
);

router.put(
  "/Todo",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    todoController.editTodo(req, res);
  }
);

router.delete(
  "/Todo",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    todoController.deleteTodo(req, res);
  }
);

module.exports = router;
