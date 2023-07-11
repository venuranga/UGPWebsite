const express = require('express');
const FinalEvaResults = require('../models/FinalEvaModel');

const evaluationRoute = express.Router();


evaluationRoute.post('/evaluations', async (req, res) => {
  try {
    const NewFinalEvaResults = new FinalEvaResults(req.body);
    await NewFinalEvaResults.save();
    res.status(200).json({
      success: "Results saved successfully"
    });
  } catch (err) {
    res.status(400).json({
      error: err
    });
  }
});


evaluationRoute.get('/evaluations/get', (req, res) => {
  FinalEvaResults.find()
    .then((finalResults) => {
      return res.status(200).json({
        success: true,
        existingPosts: finalResults
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

evaluationRoute.get('/evaluations/get/:id', async (req, res) => {
  try {
    const finalResultId = req.params.id;
    const finalResult = await FinalEvaResults.findById(finalResultId).exec();

    if (!finalResult) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    return res.status(200).json({ success: true, finalResult });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

evaluationRoute.delete('/evaluations/delete/:id', (req, res) => {
  FinalEvaResults.findByIdAndRemove(req.params.id)
    .then((finalResult) => {
      if (!finalResult) {
        return res.status(404).json({
          error: "Evaluation not found"
        });
      }
      return res.status(200).json({
        success: "Evaluation deleted successfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});



evaluationRoute.put('/evaluations/edit/:id', (req, res) => {
  const id = req.params.id;
  FinalEvaResults.findByIdAndUpdate(id, req.body)
    .then((finalResult) => {
      if (finalResult) {
        res.json({ success: true, message: 'Project updated successfully' });
      } else {
        res.json({ success: false, message: 'Project not found' });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });

    });
});

  module.exports = evaluationRoute;
