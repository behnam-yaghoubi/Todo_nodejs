import { Todo } from "../models/TodoModel";
import { successHandle, catchError } from "../utils";
import { addTodo, editTodo } from "../utils/joiValidate";
import { Msg } from "../config/constants";

export default {
  /**
   * @function Add Todo
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Object} req.body The JSON payload.
   * @param {String} todoName todo name.
   */
  async addTodo(req, res) {
    try {
      const { todoName } = req.body;
      const { id } = req.user;
      const { error } = addTodo(req.body);
      if (error) {
        return successHandle(res, 409, "error", error.details, {});
      }
      const result = await Todo.findOrCreate({
        where: {
          todoName,
          userId: id,
        },
      });
      let find = result[0]._options.isNewRecord;
      if (!find) {
        return successHandle(res, 409, "error", Msg.duplicate, {});
      }
      successHandle(res, 201, "success", Msg.success, result[0]);
    } catch (error) {
      catchError(res, error);
    }
  },

  /**
   * @function Edit Todo
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Object} req.body The JSON payload.
   * @param {String} todoName Todo name.
   * @param {String} Condition Todo condition.
   * @param {Number} id Todo id.
   */
  async editTodo(req, res) {
    try {
      const { id, todoName, Condition } = req.body;
      const { error } = editTodo(req.body);
      if (error) {
        return successHandle(res, 400, "error", error.details, {});
      }
      const [code, result] = await Todo.update(
        { todoName, Condition },
        {
          where: { id },
          returning: true,
        }
      );
      if (code === 0 || todoName === undefined || Condition === undefined) {
        return successHandle(res, 400, "error", Msg.error, {});
      }
      successHandle(res, 200, "success", Msg.success, result[0]);
    } catch (error) {
      catchError(res, error);
    }
  },

  /**
   * @function Delete Todo
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {String} req.query The id query.
   * @param {Number} id Todo id.
   */
  async deleteTodo(req, res) {
    try {
      const { id } = req.query;
      const result = await Todo.destroy({
        where: {
          id,
        },
      });
      if (result === 0) {
        return successHandle(res, 401, "error", Msg.error, {});
      }
      successHandle(res, 200, "success", Msg.success, {});
    } catch (error) {
      catchError(res, error);
    }
  },

  /**
   * @function Get All Todo
   * @param {Object} req The request.
   * @param {Object} res The response.
   * @param {Number} req.query The page query.
   * @return {JSON}
   */
  async getAllTodo(req, res) {
    try {
      const { page } = req.query;
      const result = await Todo.findAndCountAll({
        limit: 4,
        offset: (page - 1) * 4,
        where: {
          userId: req.user.id,
        },
      });

      if (result.count === 0) {
        return successHandle(res, 200, "error", Msg.error, result);
      }
      successHandle(res, 200, "success", Msg.success, result);
    } catch (error) {
      catchError(res, error);
    }
  },
};
