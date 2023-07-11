const mongoose = require('mongoose');

const project = new mongoose.Schema({


    GroupNo:{
        type:Number,
        required: true
    },

    StudentDetails:{
        type:String,
        required: true
    },
    ProjName:{
        type:String,
        required: true
    },
    ProjDetails:{
        type:String,
        required: true
    }

//check type & then add-------

    // ProjPictures:{
    //     type:string, 
    //     required: true
    // }
    

},
{
  timestamps: true,
});

module.exports = mongoose.model('ProjectDetails', project);
