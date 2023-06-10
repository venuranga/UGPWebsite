const express = require('express');
const router = express.Router();
const Results = require('../models/Results');
const csvtojson = require('csvtojson');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



router.post('/add', upload.single('csv'), async (req,res) => {
    try {
        if (!req.file) {
            throw new Error('No file uploaded');
          }
        const csvData = await csvtojson().fromFile(req.file.path);
        console.log(csvData);
        await Results.insertMany(csvData);
        console.log("Data Inserted")
        res.json({ success: 'Success'});
        alert("Importation successful");
      } catch (error) {
        console.log(error);
        //next(error);
      }

    });



router.get('/grades', async (req,res) => {
    try{
        const Result = await Results.find();
        //const intro = Result.map(Results => Results.Introduction_Background_and_Problem_statement)
        res.json(Result);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

    module.exports = router;

