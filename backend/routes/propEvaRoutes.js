const express = require('express');
const PropEvaResults = require('../models/PropEvaModel');

const evaluationPropRoute = express.Router();


evaluationPropRoute.post('/propevaluations', async (req, res) => {
  try {
    const NewPropEvaResults = new PropEvaResults(req.body);
    await NewPropEvaResults.save();
    res.status(200).json({
      success: "Results saved successfully"
    });
  } catch (err) {
    res.status(400).json({
      error: err
    });
  }
});


evaluationPropRoute.get('/propevaluations/get', (req, res) => {
  PropEvaResults.find()
    .then((propResults) => {
      return res.status(200).json({
        success: true,
        existingPosts: propResults
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

evaluationPropRoute.get('/propevaluations/get/:id', async (req, res) => {
  try {
    const propResultId = req.params.id;
    const propResult = await PropEvaResults.findById(propResultId).exec();

    if (!propResult) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    return res.status(200).json({ success: true, propResult });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

evaluationPropRoute.delete('/propevaluations/delete/:id', (req, res) => {
  PropEvaResults.findByIdAndRemove(req.params.id)
    .then((propResult) => {
      if (!propResult) {
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



evaluationPropRoute.put('/propevaluations/edit/:id', (req, res) => {
  const id = req.params.id;
  PropEvaResults.findByIdAndUpdate(id, req.body)
    .then((propResult) => {
      if (propResult) {
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

  module.exports = evaluationPropRoute;
