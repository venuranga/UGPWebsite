const express = require('express');
const Projects = require('../models/ProjectModel');

const projectRoutes = express.Router();


projectRoutes.post('/projects', async (req, res) => {
    try {
        const newProject = new Projects(req.body);
        await newProject.save();
        res.status(200).json({
            success: "Projects saved successfully"
        });
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
});

  
projectRoutes.get('/projects/get', (req, res) => {
    Projects.find()
      .then((Proj) => {
        return res.status(200).json({
          success: true,
          existingPosts: Proj
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err
        });
      });
});

projectRoutes.get('/projects/get/:id', async (req, res) => {
  try {
    const ProjId = req.params.id;
    const Proj = await Projects.findById(ProjId).exec();

    if (!Proj) {
      return res.status(404).json({ success: false, message: 'Project is not found' });
    }

    return res.status(200).json({ success: true, Proj });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

projectRoutes.delete('/projects/delete/:id', (req, res) => {
    Projects.findByIdAndRemove(req.params.id)
    .then((Proj) => {
      if (!Proj) {
        return res.status(404).json({
          error: "Projects not found"
        });
      }
      return res.status(200).json({
        success: "Projects deleted successfully"
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      });
    });
});

projectRoutes.put('/projects/edit/:id',(req,res)=>{
  Projects.findByIdAndUpdate(
      req.params.id,
      {
          $set:req.body
      },
      (err,Proj)=>{
          if(err){
              return res.status(400).json({
                  error:err
              });
          }
          return res.status(200).json({
              success:"Updated successfully"
          });
      }
  )
});

module.exports = projectRoutes;