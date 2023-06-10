/*import JWT from "jsonwebtoken";
const userModel = require( "../models/userModel.js");

const JWT_SECRET ="DFFGGH455667899JHGDQ$%@*?";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};



//moduleCoodinator acceess
export const isModuleCoodinator = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in module coordinator middelware",
    });
  }
};

//evaluator acceess
export const isEvaluator = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 2) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in evaluator middelware",
      });
    }
  };

//hod acceess
export const isHod = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 3) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in head of department middelware",
      });
    }
  };

  */