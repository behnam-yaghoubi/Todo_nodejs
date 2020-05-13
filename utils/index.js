export const catchError = (res, error) => {
  res.status(500).send({
    error: `An error has occured ${error}`,
  });
};

export const loginHandle = (res, status, token, msg, redirect) => {
  return res.status(401).send({
    status,
    token,
    msg,
    redirect,
  });
};

export const successHandle = (res, statusCode, status, msg, result) => {
  res.status(statusCode).send({
    status,
    msg,
    result,
  });
};
