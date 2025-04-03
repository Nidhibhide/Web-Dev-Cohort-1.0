const response = (res, statusCode, flag, message) => {
  const resObj = {
    success: flag,
    message: message,
  };
  res.status(statusCode).json(resObj);
};

export default response;
