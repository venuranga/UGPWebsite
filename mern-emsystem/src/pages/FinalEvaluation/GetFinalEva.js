import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { URL } from '../../env.js'; 


export default class Formpage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FinalResults: []
    };
}
  
componentDidMount(){
  this.retrieveResults();
}

retrieveResults(){
  axios.get( URL +"/evaluations/get").then(res=>{
    if(res.data.success){
      this.setState({
        FinalResults:res.data.existingPosts
      });
      console.log(this.state.Results)
    }
  })
}

deleteResult(id) {
  axios.delete( URL +`/evaluations/delete/${id}`).then((res) => {
    if (res.data.success) {
      this.retrieveFinalResults(); // Refresh the results after deletion
      console.log('Result deleted');
    }
  });
}
 

onDelete = (id) => {
  axios.delete( URL +`/evaluations/delete/${id}`).then((res) => {
    alert("Deleted Successfully");
    this.retrieveResults();
  });
}


render() {
  return (
    
    <div >
      <Header />
      <div className='container' >
      <h3 style={{ height: '150px' }}><b></b></h3>
      <h3 ><b>Final Evaluation</b></h3>
      <table className="table" >
        <thead>
          <tr>
            
            <th scope="col">Group No</th>
            <th scope="col">Registration No</th>
            <th scope="col">Presentation and/or Demonstration</th>
            <th scope="col">Viva </th>
            <th scope="col">Report </th>
            <th scope="col">Contribution </th>
            <th scope="col">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {this.state.FinalResults.map((finalResult, index) => (
            <tr key={index}>
              {/* <th scope="row">{index + 1}</th> */}
              <td>{finalResult.GrpNo}</td>
              <td>
                <a href={`/post/${finalResult._id}`} style={{textDecoration:'none'}}>
                {finalResult.RegNo}
                </a>
              </td>
              <td>{finalResult.criteria1}</td>
              <td>{finalResult.criteria2}</td>
              <td>{finalResult.criteria3}</td>
              <td>{finalResult.criteria4}</td>
              <td>

                <a className="btn btn-warning" href={`/edit/${finalResult._id}`}>
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>

                &nbsp;
                <button className='btn btn-danger' href="#" onClick={() => this.onDelete(finalResult._id)}>
                  <i className='fas fa-trash-alt'></i>&nbsp;Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='btn btn-success'>
  <a href='/add' style={{ textDecoration: 'none', color: 'white' }}>
    update table
  </a>
</button>

      </div>
      <Footer/>
    </div>
  )
 }
}          