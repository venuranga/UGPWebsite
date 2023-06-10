const express = require('express');
const DynamicCollection = require('../models/collection');
const router = express.Router();
const mongoose = require('mongoose');


router.post('/', async(req,res) => {

    const collectionName = req.body.collectionName;
    try{

        const existingCollection = await DynamicCollection.findOne({ name: collectionName });
        if (existingCollection) {
          return res.status(400).json({ error: 'Collection already exists' });
        }
    
        const dynamicSchema = new mongoose.Schema({}, {strict:false});

        const newcollection = mongoose.model(collectionName, dynamicSchema);

        await newcollection.init();

        await newcollection.create(req.body);

        res.json({success:true, message:'Collection created successfully'});

    }

    catch(err) {
        console.error(err);
        res.status(500).json({error: 'Failed to add collection'});

    }

});


router.post('/:collectionName', async(req,res)  =>{
    const {collectionName} = req.params;
    const {data} = req.body;


    try{
        await DynamicCollection.fineOneAndUpdate({collectionName}, {$push: {data}}, {new:true});
        res.json({message: 'Data saved successfully'});
    }

    catch(err) {
        res.status(500).json({error: 'Failed to save data'});

    }

});

module.exports = router;