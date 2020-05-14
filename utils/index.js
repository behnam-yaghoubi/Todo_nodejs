export const catchError = (res, error) => {
  res.status(500).send({
    error: `An error has occured ${error}`,
  });
};

export const loginHandle = (res, statusCode, status, token, msg, redirect) => {
  return res.status(statusCode).send({
    status,
    token,
    msg,
    redirect,
  });
};

export const successHandle = (res, statusCode, status, msg, result) => {
  return res.status(statusCode).send({
    status,
    msg,
    result,
  });
};
