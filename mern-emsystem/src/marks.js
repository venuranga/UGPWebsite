// Create a form for entering new project marks
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header'
import Footer from './components/Footer'
import './marks.css'

const Addnewcriteria = () => {
  const [collectionName, setCollectionName] = useState('');
  const [fieldData, setfieldData] = useState([]);

  const handleCreateColleciton = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the Express API to add a new column
      const response = await axios.post('http://localhost:5000/api/createCollection/', { collectionName });

      // Handle successful response
      console.log('Collection created successfully:', response.data);
    } catch (error) {
      // Handle error
      console.error('Failed to add collection:', error);
    }
  };

  const handleSaveDta = async () => {
    try {
      await axios.post('http://localhost:5000/api/createCollection/${collectionName', {data: fieldData});
      console.log('Data saved successfully');
    }

    catch(error) {
      console.error('Failed to save Data:', error);
    }
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <div className='rectangle'>
      <h1> Create Collection</h1>
      <input
      type = "text"
      placeholder='Collection Name'
      value = {collectionName}
      onChange={(e) => setCollectionName(e.target.value)} />
      {/*for additional form fields*/}

      <button onClick={handleCreateColleciton}> Create Collection </button>
      <button onClick={handleSaveDta}>Save Data</button>

      <form enctype="multipart/form-data" action="http://localhost:5000/api/results/add" method="POST">
  <input type="file" name="csv" />
  <input type="submit" value="add" />
</form>
</div>
    <Footer />
    </div>



    

  );
};




export default Addnewcriteria;
