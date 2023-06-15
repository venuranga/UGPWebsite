const mongoose = require('mongoose');

const Studentschema = new mongoose.Schema({}, {strict:false});
Studentschema.index({ Group_ID: 1, Student_Name:1 }, { unique: true });


const Students = mongoose.model('Students', Studentschema);

module.exports = mongoose.model('Students', Studentschema);