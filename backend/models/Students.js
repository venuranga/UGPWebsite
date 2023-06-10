const mongoose = require('mongoose');

const Studentschema = new mongoose.Schema({}, {strict:false});

const Students = mongoose.model('Students', Studentschema);

module.exports = mongoose.model('Students', Studentschema);