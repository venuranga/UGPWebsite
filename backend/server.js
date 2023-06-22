const express = require('express');
const cors = require('cors');
require('dotenv').config();
//const morgan = require( "morgan");
const DynamicCollection = require("./models/collection");
const collectionRoutes = require("./routes/collection");
const ResultsRoutes =  require("./routes/Results");
const authRoutes = require("./routes/authRoute");
const StudentRoutes = require("./routes/Students");
const ProposalRoutes = require("./routes/Proposal_Marks")

const app = express();

const port = process.env.port || 5000

const url = 'mongodb+srv://svenuranga:iamleVenu98%23@cluster0.n8pqomt.mongodb.net/UGPDatabase?retryWrites=true&w=majority';


app.use(cors());
app.use(express.json());
//app.use(morgan('dev'));

const mongoose = require('mongoose');


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB database");
}).catch((err) => {
    console.log("Error connecting to MongoDB database:", err);
});


app.use('/api/createCollection', collectionRoutes);
app.use('/api/results', ResultsRoutes);
app.use("/api/v1/auth", authRoutes);
app.use('/api/students', StudentRoutes);
app.use('/api/proposal', ProposalRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});
