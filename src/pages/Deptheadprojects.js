

 /* useEffect(() => {
    // Fetch data from the database and update the buttonTexts state
    // For simplicity, let's assume the data is an array of strings
    const fetchData = async () => {
      try {
        const response = await fetch('your-database-endpoint');
        const data = await response.json();
        setButtonTexts(data);
      } catch (error) {
        console.log(error);
      }
    };*/

    import React, { useState, useEffect } from 'react';
    import Footer from '../components/Footer.js'
    import Header from '../components/Header.js'
    import './deptheadprojects.css';
    
    const MyComponent = () => {
      const [buttonTexts, setButtonTexts] = useState([]);
    
      useEffect(() => {
        // Sample data array for testing
        const sampleData = [
          { text: 'Button 1', order: 1 },
          { text: 'Button 2', order: 3 },
          { text: 'Button 3', order: 2 },
        ];
    
        // Sort the sample data based on the 'order' field
        const sortedData = sampleData.sort((a, b) => a.order - b.order);
    
        setButtonTexts(sortedData.map(item => item.text));
      }, []);
    
      return (
        <div>  
          <Header />
       
          {buttonTexts.map((text, index) => (
            <button key={index} className="btn btn-custom">{text}</button>
          ))}
          <Footer />
        </div>
      );
    };
    
    export default MyComponent;
    