const express = require('express');
const Criterias = require('../models/CriteriaNoModel');

const critiriaRoute = express.Router();


critiriaRoute.post('/criterias', async (req, res) => {
    try {
        const newCriteria = new Criterias(req.body);
        await newCriteria.save();
        res.status(200).json({
            success: "Criterias saved successfully"
        });
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
});

//code for dynamic criterias

// critiriaRoute.post("/criterias", async (req, res) => {
//   try {
//     const data = req.body;
//     const evaluation = await updateCriteria.findOne({ RegNo: data.regNo });
//     if (evaluation)
//       return res.status(404).json({
//         error: "User Not Found",
//       });
//     await evaluation.findOneAndUpdate(
//       { _id: data.regNo }, // Find the document by its ID
//       { $push: { criteria: data.criteria } }, // Use $push operator to add the new item to the criteria array
//       { new: true } // Return the updated document
//     );
//     await evaluation.save();
//     res.status(200).json({
//       success: "Criterias saved successfully",
//     });
//   } catch (err) {
//     res.status(400).json({
//       error: err,
//     });
//   }
// });

  
critiriaRoute.get('/criterias/get', (req, res) => {
    Criterias.find()
      .then((crite) => {
        return res.status(200).json({
          success: true,
          existingPosts: crite
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err
        });
      });
});

critiriaRoute.get('/criterias/get/:id', async (req, res) => {
  try {
    const criteId = req.params.id;
    const crite = await Criterias.findById(criteId).exec();

    if (!crite) {
      return res.status(404).json({ success: false, message: 'criteria is not found' });
    }

    return res.status(200).json({ success: true, crite });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

critiriaRoute.delete('/criterias/delete/:id', (req, res) => {
    Criterias.findByIdAndRemove(req.params.id)
    .then((crite) => {
      if (!crite) {
        return res.status(404).json({
          error: "Evaluation not found"
        });
      }
      return res.status(200).json({
        success: "Criteria is deleted successfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

module.exports = critiriaRoute;