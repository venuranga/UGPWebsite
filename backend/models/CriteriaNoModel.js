const mongoose = require('mongoose');

const Criteria = new mongoose.Schema({

    NewCriteria:{
        type:String,
        required: true
    },
    RelatedMark:{
        type:Number,
        required: true
    },
    
},
{
  timestamps: true,
});

module.exports = mongoose.model('Criterias', Criteria);

