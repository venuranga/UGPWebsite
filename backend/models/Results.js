const mongoose = require('mongoose');

const Resultschema = new mongoose.Schema({}, {strict:false});
Resultschema.index({ Group_ID: 1 }, { unique: true });

const Results = mongoose.model('Results', Resultschema);

module.exports = mongoose.model('Results', Resultschema);