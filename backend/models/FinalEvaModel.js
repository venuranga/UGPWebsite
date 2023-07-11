const mongoose = require('mongoose');


const finalevalutions = new mongoose.Schema({
    GrpNo:{
        type:String,
        required: true
    },

    RegNo:{
        type:String,
        required: true
    },

    //here criteria mean evaluation criterias

    criteria1:{
        type:Number,
        required: true
    },
    criteria2:{
        type:Number,
        required: true
    },
    criteria3:{
        type:Number,
        required: true
    },
    criteria4:{
        type:Number,
        required: true
    }

},
{
  timestamps: true,
});
finalevalutions.index({ GrpNo: 1, RegNo:1 }, { unique: true });

module.exports = mongoose.model('FinalEvaResults', finalevalutions);

// const mongoose = require('mongoose');
// const Criteria = require('./CriteriaNoModel'); // Import the Criterias model

// const evalutions = new mongoose.Schema({
//     GrpNo:{
//         type:String,
//         required: true
//     },

//     RegNo:{
//         type:String,
//         required: true
//     },
// },
// {
//   timestamps: true,
// });

// // Fetch criteria fields from the Criterias model
// const fetchCriterias = async () => {
//     try {
//       const criterias = await Criteria.find({}, 'NewCriteria');
//       criterias.forEach(criteria => {
//         evalutions.add({
//           [criteria.NewCriteria]: {
//             type: Number,
//             required: true
//           }
//         });
//       });
//       module.exports = mongoose.model('Results', evalutions);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   fetchCriterias();