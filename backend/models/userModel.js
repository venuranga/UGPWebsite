const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
 
 {
    fullname: {
      type:String,
      required:true,
      trim:true
    },
    username: {
      type:String,
      required:true,
      trim:true
    },
    password: {
      type:String,
      required:true
    },
    regno: {
      type:String,
      required:true
    },
    department: {
      type:String,
      required:true
    },
    answer: {
        type:String,
        required:true
      },
    
    role: {
      type:Number,
      default:0
    }

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);

module.exports = mongoose.model('users', UserSchema);