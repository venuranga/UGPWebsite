const mongoose = require('mongoose');

const Resultschema = new mongoose.Schema({}, {strict:false});

const Results = mongoose.model('Results', Resultschema);

module.exports = mongoose.model('Results', Resultschema);