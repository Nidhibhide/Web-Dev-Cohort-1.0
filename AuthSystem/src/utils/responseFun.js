const responseFun = (res, statusCode, message, flag, val, token) => {
  const response = {
    message: `${message}`,
    success: `${flag}`,
 
  };

  if (val !== undefined) response.isVerified = val;
  if (token !== undefined) response.token = token;
  res.status(statusCode).json(response);
};

export default responseFun;


