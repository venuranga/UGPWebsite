const mongoose = require('mongoose');

const ProposalResultschema = new mongoose.Schema({}, {strict:false});
ProposalResultschema.index({ Group_ID: 1 }, { unique: true });

const ProposalResults = mongoose.model('Proposal_Results', ProposalResultschema);

module.exports = mongoose.model('Proposal_Results', ProposalResultschema);