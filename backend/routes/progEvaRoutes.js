const express = require('express');
const ProgEvaResults = require('../models/ProgEvaModel');

const evaluationProgRoute = express.Router();


evaluationProgRoute.post('/progevaluations', async (req, res) => {
  try {
    const NewProgEvaResults = new ProgEvaResults(req.body);
    await NewProgEvaResults.save();
    res.status(200).json({
      success: "Results saved successfully"
    });
  } catch (err) {
    res.status(400).json({
      error: err
    });
  }
});


evaluationProgRoute.get('/progevaluations/get', (req, res) => {
  ProgEvaResults.find()
    .then((progResults) => {
      return res.status(200).json({
        success: true,
        existingPosts: progResults
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

evaluationProgRoute.get('/progevaluations/get/:id', async (req, res) => {
  try {
    const progResultId = req.params.id;
    const progResult = await ProgEvaResults.findById(progResultId).exec();

    if (!progResult) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    return res.status(200).json({ success: true, progResult });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

evaluationProgRoute.delete('/progevaluations/delete/:id', (req, res) => {
  ProgEvaResults.findByIdAndRemove(req.params.id)
    .then((progResult) => {
      if (!progResult) {
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



evaluationProgRoute.put('/progevaluations/edit/:id', (req, res) => {
  const id = req.params.id;
  ProgEvaResults.findByIdAndUpdate(id, req.body)
    .then((progResult) => {
      if (progResult) {
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

  module.exports = evaluationProgRoute;
