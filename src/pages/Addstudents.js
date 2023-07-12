import React from 'react';
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import './addstudents.css'



function Table() {
  return (
    
    <>
    <Header/>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
      </head>
      <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', height: '100vh' }}>
    
      <table className="table table-responsive custom-table">
        <thead>
          <tr>
            <th scope="col">Group_ID</th>
            <th scope="col">Project_background</th>
            <th scope="col">Objectives</th>
            <th scope="col">Examiner overall assessment</th>
            <th scope="col">Mechanics of writing</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Clear and well-defined</td>
            <td>Clear and well-defined objectives</td>
            <td>8</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Good</td>
            <td>Some objectives need more clarity</td>
            <td>6</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Unclear</td>
            <td>Unclear objectives</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Good</td>
            <td>Clear objectives</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Unclear</td>
            <td>Unclear objectives</td>
            <td>2</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Good</td>
            <td>Clear and concise objectives</td>
            <td>9</td>
            <td>9</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Clear and well-defined</td>
            <td>Clear and well-defined objectives</td>
            <td>10</td>
            <td>8</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Unclear</td>
            <td>Unclear objectives</td>
            <td>4</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      </div>
      <Footer/>
    </>
 
  );
}

export default Table;
