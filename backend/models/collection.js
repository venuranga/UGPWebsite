const mongoose = require('mongoose');

const dynamicSchema = new mongoose.Schema({}, {strict:false});

const DynamicCollection = mongoose.model('DynamicCollection', dynamicSchema);

module.exports = mongoose.model('DynamicCollection', dynamicSchema);