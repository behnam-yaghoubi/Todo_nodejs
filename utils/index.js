/**
 * @namespace utiles
 * @name catchError
 * function Represents a error
 * @function <h3>catchError</h3>
 * @param  {String} res response
 * @param  {String} error error in catch
 * @returns {JSON}
 */
export const catchError = (res, error) => {
  res.status(500).send({
    error: `An error has occured ${error}`,
  });
};
/**
 * @function <h3>loginHandle</h3>
 * @param  {String} res response
 * @param  {Number} statusCode status code number
 * @param  {String} status status msg
 * @param  {String} token user token
 * @param  {String} msg message
 * @param  {String} redirect redirect after login
 * @returns {JSON}
 */
export const loginHandle = (res, statusCode, status, token, msg, redirect) => {
  return res.status(statusCode).send({
    status,
    token,
    msg,
    redirect,
  });
};
/**

 * @function <h3>successHandle</h3>
 * @param  {String} res response
 * @param  {Number} statusCode status code number
 * @param  {String} status status msg
 * @param  {String} msg message
 * @param  {JSON} result function result
 * @returns {JSON}
 */
export const successHandle = (res, statusCode, status, msg, result) => {
  res.status(statusCode).send({
    status,
    msg,
    result,
  });
};
/**
 * @function <h3>loginValidation with joi</h3>
 * @param  {String} res response
 * @param  {Number} statusCode  status code number
 * @param  {String} status
 * @param  {String} token user token
 * @param  {String} msg
 * @param  {String} redirect redirect after login
 */
export const loginValidation = (
  res,
  statusCode,
  status,
  token,
  msg,
  redirect
) => {
  res.status(statusCode).send({
    status,
    token,
    msg,
    redirect,
  });
};
