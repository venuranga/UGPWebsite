import React, { useState } from 'react';
import './eProgressEvaluationMarks.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'


 const EProgressEvaluationMarks = () => {
   const [GroupID, setGroupID] = useState('');
   const [RegistrationNumber, setRegistrationNumber] = useState('');
   const [PresentationAndVivaMarks, setPresentationAndVivaMarks] = useState('');
   const [ContributionMarks, setContributionMarks] = useState('');

   const handleGroupIDChange = (e) => {
     setGroupID(e.target.value);
   }; 

   const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleContributionMarksChange = (e) => {
    setContributionMarks(e.target.value);
  };

   const handlePresentationAndVivaMarksChange = (e) => {
     setPresentationAndVivaMarks(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('GroupID: ', GroupID);
     console.log('RegistrationNumber: ',RegistrationNumber);
     console.log('PresentationAndVivaMarks: ', PresentationAndVivaMarks);
     console.log('ContributionMarks: ', ContributionMarks);
     
   };

  return (
    <div >
    <Header/>
    <span className="ProgressEMarkk">Progress Evaluation Marks</span>
    span.eProgressEvaluationMar
    <div className="ProgressE-Marks-container">
      <form className="ProgressE-Marks" onSubmit={handleSubmit}>

        <div className="ProgressE-Marks-group">
          <label htmlFor="GroupID">Group ID:</label>
          <input type="text" id="GroupID" value={GroupID} onChange={handleGroupIDChange} />
        </div>

        <div className="ProgressE-Marks-group">
          <label htmlFor="RegistrationNumber">Registration Number:</label>
          <input type="text" id="RegistrationNumber" value={RegistrationNumber} onChange={handleRegistrationNumberChange} />
        </div>

        <div className="ProgressE-Marks-group">
          <label htmlFor="PresentationAndVivaMarks">Presentation And Viva Marks:</label>
          <input type="text" id="PresentationAndVivaMarks" value={PresentationAndVivaMarks} onChange={handlePresentationAndVivaMarksChange} />
        </div>

        <div className="ProgressE-Marks-group">
          <label htmlFor="ContributionMarks">Contribution Marks:</label>
          <input type="text" id="ContributionMarks" value={ContributionMarks} onChange={handleContributionMarksChange} />
        </div>

        <button type="submit" className="SubmitMarks">Submit Marks</button>
      </form>
      
      </div>
      <Footer/>
    </div>
  );
 };

export default EProgressEvaluationMarks;