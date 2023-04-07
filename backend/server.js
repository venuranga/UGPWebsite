const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const portscanner = require('portscanner');

const url = 'mongodb://127.0.0.1:27017/UGPDatabase';


app.use(cors());
app.use(express.json());
const startServer = async () => {
    const port = await portscanner.findAPortNotInUse(3000, 4000, '127.0.0.1');
    console.log(`Server is listening on port ${port}`);
};

const mongoose = require('mongoose');


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB database");
}).catch((err) => {
    console.log("Error connecting to MongoDB database:", err);
});
