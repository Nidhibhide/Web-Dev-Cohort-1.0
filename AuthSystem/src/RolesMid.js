import responseFun from "./utils/responseFun.js";

const AuthRole = (role) => {
  return (req, res, next) => {
    try {
      const Storedrole = req.user?.role;

      if (role != Storedrole) {
        return responseFun(res, 400, "Unauthorized role", false);
      }
      console.log(Storedrole);

      next();
    } catch (error) {
      return responseFun(res, 400, "Invalid role", false);
    }
  };
};

export default AuthRole;
