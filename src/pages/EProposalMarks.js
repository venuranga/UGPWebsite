import React, { useState } from 'react';
import './eProposalMarks.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'


 const EFinalEvaluationMark = () => {
   const [GroupID, setGroupID] = useState('');
   const [RegistrationNumber, setRegistrationNumber] = useState('');
   const [PresentationAndVivaMarks, setPresentationAndVivaMarks] = useState('');
   const [ReportMarks, setReportMarks] = useState('');

   const handleGroupIDChange = (e) => {
     setGroupID(e.target.value);
   }; 

   const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleReportMarksChange = (e) => {
    setReportMarks(e.target.value);
  };

   const handlePresentationAndVivaMarksChange = (e) => {
     setPresentationAndVivaMarks(e.target.value);
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('GroupID: ', GroupID);
     console.log('RegistrationNumber: ',RegistrationNumber);
     console.log('PresentationAndVivaMarks: ', PresentationAndVivaMarks);
     console.log('ReportMarks: ', ReportMarks);
     
   };

  return (
    <div >
    <Header/>
    <span className="ProposalMarkk">Proposal Marks</span>
    <div className="proposal-marks-container">
      <form className="proposal-marks" onSubmit={handleSubmit}>

        <div className="proposal-marks-group">
          <label htmlFor="GroupID">Group ID:</label>
          <input type="text" id="GroupID" value={GroupID} onChange={handleGroupIDChange} />
        </div>

        <div className="proposal-marks-group">
          <label htmlFor="RegistrationNumber">Registration Number:</label>
          <input type="text" id="RegistrationNumber" value={RegistrationNumber} onChange={handleRegistrationNumberChange} />
        </div>

        <div className="proposal-marks-group">
          <label htmlFor="PresentationAndVivaMarks">Presentation And Viva Marks:</label>
          <input type="text" id="PresentationAndVivaMarks" value={PresentationAndVivaMarks} onChange={handlePresentationAndVivaMarksChange} />
        </div>

        <div className="proposal-marks-group">
          <label htmlFor="ReportMarks">Report Marks:</label>
          <input type="text" id="ReportMarks" value={ReportMarks} onChange={handleReportMarksChange} />
        </div>

        <button type="submit" className="SubmitMarks">Submit Marks</button>
      </form>
      
      </div>
      <Footer/>
    </div>
  );
 };

export default EFinalEvaluationMark;