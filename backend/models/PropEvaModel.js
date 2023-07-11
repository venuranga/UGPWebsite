const mongoose = require('mongoose');


const propevalutions = new mongoose.Schema({
    GrpNo:{
        type:String,
        required: true
    },

    RegNo:{
        type:String,
        required: true
    },

   

    criteriaProp1:{
        type:Number,
        required: true
    },
    criteriaProp2:{
        type:Number,
        required: true
    },
    
},
{
  timestamps: true,
});

module.exports = mongoose.model('PropEvaResults', propevalutions);