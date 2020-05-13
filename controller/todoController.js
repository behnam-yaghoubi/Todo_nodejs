import { Todo } from "../models/TodoModel";
export default {
  async addTodo(req, res) {
    try {
      const { todoName } = req.body;
      const { id } = req.user;

      const result = await Todo.findOrCreate({
        where: {
          todoName,
          userId: id,
        },
      });
      let find = result[0]._options.isNewRecord;
      if (!find) {
        return res.status(200).send({
          success: true,
          msg: "این فعالیت قبلا وارد شده است",
          result: {},
        });
      } else {
        return res.status(201).send({
          success: true,
          msg: "فعالیت با موفقیت افزوده شد",
          result: result[0],
        });
      }
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
  async editTodo(req, res) {
    try {
      const { id, todoName, Condition } = req.body;
      const [code, result] = await Todo.update(
        { todoName, Condition },
        {
          where: { id },
          returning: true,
        }
      );
      if (code === 0) {
        return res.status(400).send({
          success: "error",
          msg: "درخواست شما پاسخی ندارد",
          result,
        });
      }
      res.status(200).send({
        status: "success",
        msg: "درخواست شما با موفقیت انجام شد",
        result,
      });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
  async deleteTodo(req, res) {
    try {
      const { id } = req.query;
      await Todo.destroy({
        where: {
          id,
        },
      });
      res.ststus(200).send({
        status: "success",
        msg: "درخواست با موفقیت انجام شد",
      });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
  async getAllTodo(req, res) {
    try {
      const { page } = req.query;
      const result = await Todo.findAll({
        limit: 4,
        offset: (page - 1) * 4,
        where: {
          userId: req.user.id,
        },
      });
      if (!result) {
        return res.status().send({
          status: "error",
          msg: "اطلاعاتی یافت نشد",
          result,
        });
      }
      res.status(200).send({
        status: "success",
        msg: "لیست تمام فعالیت ها",
        result,
      });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
};
