const express = require('express');
const router = express.Router();
const Students = require('../models/Students');
const csvtojson = require('csvtojson');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



router.post('/add', upload.single('csv'), async (req,res) => {
    try {
        const csvData = await csvtojson().fromFile(req.file.path);
        console.log(csvData);
        await Students.insertMany(csvData);
        console.log("Data Inserted")
        res.json({ success: 'Success'});
      } catch (error) {
        console.log(error);
        //next(error);
      }

    });


    router.get('/view', async (req,res) => {
      try{
          const Student = await Students.find();
          //const intro = Result.map(Results => Results.Introduction_Background_and_Problem_statement)
          res.json(Student);
      } catch (err) {
          res.status(500).json({message: err.message});
      }
  }); 

    module.exports = router;
