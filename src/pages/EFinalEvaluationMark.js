import React, { useState } from 'react';
import './eFinalEvaluationMark.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'


 const EFinalEvaluationMark = () => {
   const [GroupID, setGroupID] = useState('');
   const [RegistrationNumber, setRegistrationNumber] = useState('');
   const [PresentationAndVivaMarks, setPresentationAndVivaMarks] = useState('');
   const [ReportMarks, setReportMarks] = useState('');
   const [ContributionMarks, setContributionMarks] = useState('');
   const [DemonstartionMarks, setDemonstartionMarks] = useState('');

   const handleGroupIDChange = (e) => {
     setGroupID(e.target.value);
   }; 

   const handleRegistrationNumberChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleDemonstartionMarksChange = (e) => {
    setDemonstartionMarks(e.target.value);
  };

   const handlePresentationAndVivaMarksChange = (e) => {
     setPresentationAndVivaMarks(e.target.value);
   };

   const handleContributionMarksChange = (e) => {
    setContributionMarks(e.target.value);
  };


  const handleReportMarksChange = (e) => {
    setReportMarks(e.target.value);
  };


   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('GroupID: ', GroupID);
     console.log('RegistrationNumber: ',RegistrationNumber);
     console.log('PresentationAndVivaMarks: ', PresentationAndVivaMarks);
     console.log('ReportMarks: ', ReportMarks);
     console.log('ContributionMarks: ', ContributionMarks);
     console.log('DemonstartionMarks: ', DemonstartionMarks);
     
   };

  return (
    <div >
    <Header/>
    <span className="FinalEMarkk">Final Evaluation Marks</span>
    <div className="FinalEvaluation-Marks-container">
      <form className="FinalEvaluation-Marks" onSubmit={handleSubmit}>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="GroupID">Group ID:</label>
          <input type="text" id="GroupID" value={GroupID} onChange={handleGroupIDChange} />
        </div>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="RegistrationNumber">Registration Number:</label>
          <input type="text" id="RegistrationNumber" value={RegistrationNumber} onChange={handleRegistrationNumberChange} />
        </div>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="PresentationAndVivaMarks">Presentation And Viva Marks:</label>
          <input type="text" id="PresentationAndVivaMarks" value={PresentationAndVivaMarks} onChange={handlePresentationAndVivaMarksChange} />
        </div>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="ReportMarks">Report Marks:</label>
          <input type="text" id="ReportMarks" value={ReportMarks} onChange={handleReportMarksChange} />
        </div>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="ContributionMarks">Contribution Marks:</label>
          <input type="text" id="ContributionMarks" value={ContributionMarks} onChange={handleContributionMarksChange} />
        </div>

        <div className="FinalEvaluation-Marks-group">
          <label htmlFor="DemonstartionMarks">Demonstartion Marks:</label>
          <input type="text" id="DemonstartionMarks" value={DemonstartionMarks} onChange={handleDemonstartionMarksChange} />
        </div>

        <button type="submit" className="SubmitMarks">Submit Marks</button>
      </form>
      
      </div>
      <Footer/>
    </div>
  );
 };

export default EFinalEvaluationMark;