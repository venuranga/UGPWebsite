/*
const userModel = require( "../models/userModel.js");
const comparePassword  = require("../helpers/authHelper.js");
const hashPassword = require("../helpers/authHelper.js");
const JWT = require("jsonwebtoken");



const JWT_SECRET ="DFFGGH455667899JHGDQ$%@*?";


export const registerController = async(req,res)=>{
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
    }
};






//POST LOGIN
export const loginController = async (req, res) => {
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
      expiresIn: "1h", 
      
      
      
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
};

// //forgotPasswordController

// export const forgotPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword } = req.body;
//     if (!email) {
//       res.status(400).send({ message: "Emai is required" });
//     }
//     if (!answer) {
//       res.status(400).send({ message: "answer is required" });
//     }
//     if (!newPassword) {
//       res.status(400).send({ message: "New Password is required" });
//     }
//     //check
//     const user = await userModel.findOne({ email, answer });
//     //validation
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Wrong Email Or Answer",
//       });
//     }
//     const hashed = await hashPassword(newPassword);
//     await userModel.findByIdAndUpdate(user._id, { password: hashed });
//     res.status(200).send({
//       success: true,
//       message: "Password Reset Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };

//test controller
export const testController = async(req,res)=>{
    res.send("Protected route");
 
 };

 */