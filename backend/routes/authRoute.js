const express = require('express');
//import {registerController,loginController,testController} from '../controllers/authControllers.js'; //,loginController,forgotPasswordController
//import { isHod,isEvaluator,isModuleCoodinator, requireSignIn } from "../middlewares/authMiddleware.js";

//const Router = express.Router();

//router object
const router = express.Router();
const userModel = require( "../models/userModel.js");
const JWT = require("jsonwebtoken");
const JWT_SECRET ="DFFGGH455667899JHGDQ$%@*?";
const bcrypt = require("bcrypt");

const testController = async(req,res)=>{
    res.send("Protected route");
 
 };

const hashPassword = async(password) =>{
    try{
        const saltRounds = 10; 


        //---------------------what is saltrounds---------------

        
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword
    }
    catch(error){
        console.log(error)
    }
};

const comparePassword = async(password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword);
}

const requireSignIn = async (req, res, next) => {
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


  const isModuleCoodinator = async (req, res, next) => {
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


  const isEvaluator = async (req, res, next) => {
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


  const isHod = async (req, res, next) => {
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

//routing 
//REGISTER||METHOS POST
router.post('/register',async(req,res)=>{
    try{
        const {fullname,username,password,regno,department,answer}= req.body;

        //validations
        if(!fullname){
            return res.send({message:'Full Name is required'})
        }
        if(!username){
            return res.send({message:'Username is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!regno){
            return res.send({message:'Registation number is required'})
        }
        if(!department){
            return res.send({message:'Department is required'})
        }
        if(!answer){
          return res.send({message:'Answer is required'})
      }
       
        //check user
        const existingUser = await userModel.findOne({username})

        //existingUser
        if(existingUser){
            return res.status(200).send({
                success: false,
                message:'Already Registered please login'
            })
        }


        //registerUser
        const hashedPassword = await hashPassword(password)
        

        //save
        const user =await new userModel({fullname,username,password:hashedPassword,regno,department,answer}).save()
        
        res.status(201).send({
            success: true,
            message: 'User registered sucssesfully',
            user,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message: 'Error in registration',
            error
        })
    }})

//LOGIN|| POST
router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      //validation
      if (!username || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid username or password",
        });
      }
  
      
      //check user 
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Username is not registerd",
        });
      }
  
  
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
  
      //token
      const token = await JWT.sign({ _id: user._id }, JWT_SECRET, {
        //expiresIn: "1h", 
        
        
        
        //--------WHY THIS EXPIRE JWT TOKEN----------
  
  
  
  
  
      });
  
  
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
  
          // fullname,username,password:hashedPassword,regno,department,answer
  
          _id: user._id,
          fullname: user.fullname,
          username: user.username,
          regno: user.regno,
          department: user.department,
          role: user.role,
        },
        token,
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  })

//forgot password
// router.post('/forgot-password',forgotPasswordController)

//test routers
//isHOD =3
router.get('/test',requireSignIn,isModuleCoodinator ,testController) // requireSignIn, isAdmin,

//protected user route auth
router.get('/user-auth', requireSignIn,(req,res) =>{
    res.status(200).send({ok: true});
}
);  

//protected Module Coodinator route auth
//isModuleCoordinator = 1
router.get('/modulecoodinator-auth', requireSignIn,isModuleCoodinator, (req,res) =>{
    res.status(200).send({ok: true});
}
);

//protected Evaluator route auth
//isEvaluators = 2
router.get('/evaluator-auth', requireSignIn,isEvaluator, (req,res) =>{
    res.status(200).send({ok: true});
}
);

//protected Head of department route auth
router.post('/hod-auth', requireSignIn,isHod, (req,res) =>{
    res.status(200).send({ok: true});
}
);


module.exports = router;