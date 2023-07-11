import React, { Component } from 'react'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js';
import axios from 'axios'
import { URL } from '../../env.js';

export default class GetProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Projects: []
    };
  }



  componentDidMount() {
    this.retrieveProjects();
  }

  retrieveProjects() {
    //"proxy":"http://localhost:8000"
    axios.get(URL + "/projects/get").then(res => {
      if (res.data.success) {
        this.setState({
          Projects: res.data.existingPosts
        });
        console.log(this.state.Projects)
      }
    })
  }

  deleteResult(id) {
    axios.delete(URL + `/projects/delete/${id}`).then((res) => {
      if (res.data.success) {
        this.retrieveProjects(); // Refresh the Projects after deletion
        console.log('Project is deleted');
      }
    });
  }


  onDelete = (id) => {
    axios.delete(URL + `/projects/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrieveProjects();
    });
  }


  render() {
    return (

      <div >
        <Header />
        <div className='container' >
          <h3 style={{ height: '150px' }}><b></b></h3>
          
          <h3 ><b>Undergraduate Projects</b></h3>
          <br/>
          <table className="table" >
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}{/* GroupNo,StudentDetails,ProjName,ProjDetails */}
                <th scope="col">Group No</th>
                <th scope="col">Project Name</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Projects.map((Proj, index) => (
                <tr key={index}>

                  <td><a href={`/projects/get/${Proj._id}`} style={{ textDecoration: 'none' }}>
                    {Proj.GroupNo}</a></td>

                  <td>
                    <a href={`/projects/get/${Proj._id}`} style={{ textDecoration: 'none' }}>
                      {Proj.ProjName}
                    </a>
                  </td>


                  <td>

                    <a className="btn btn-warning" href={`/projects/edit/${Proj._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          

        </div>
        <Footer />
        
      </div>
    )
  }
}
