
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//import routes
const finalEvaRoutes = require('./Routes/finalEvaRoutes');
const critiriaRoute = require('./Routes/critiriaRoutes');
const projectRoutes = require('./Routes/projectRoutes');
const evaluationProgRoute = require('./Routes/progEvaRoutes');
const evaluationPropRoute = require('./Routes/propEvaRoutes');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(finalEvaRoutes);
app.use(critiriaRoute);
app.use(projectRoutes);
app.use(evaluationProgRoute);
app.use(evaluationPropRoute);

const PORT = 8000; // You can change the port number if needed

// app.use(express.json());

// Connect to MongoDB
const DB_URI = 'mongodb+srv://TharushiWitharana:UGP@cluster0.n8pqomt.mongodb.net/UGPDatabase?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
//mongodb+srv://WitharanaWAKTM:Comshop1@cluster1comshopweb.kcmtxuy.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://TharushiWitharana:UGP@cluster0.n8pqomt.mongodb.net/UGPDatabase?retryWrites=true&w=majority

mongoose.connect(DB_URI,{
  useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => {console.log('Connected to DB')})
  .catch((err) => console.log('Error connecting to DB', err));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
