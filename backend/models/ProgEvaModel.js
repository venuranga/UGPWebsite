const mongoose = require('mongoose');


const progevalutions = new mongoose.Schema({
    GrpNo:{
        type:String,
        required: true
    },

    RegNo:{
        type:String,
        required: true
    },

    

    criteriaProg1:{
        type:Number,
        required: true
    },
    criteriaProg2:{
        type:Number,
        required: true
    },
    
},
{
  timestamps: true,
});

module.exports = mongoose.model('ProgEvaResults', progevalutions);


//---------------------------------------------------------------------------

// const progevalutions = new mongoose.Schema({timestamps: true}, {strict:false});
// progevalutions.index({RegNo: 1}, {unique: true});

// module.exports = mongoose.model('ProgEvaResults', progevalutions);