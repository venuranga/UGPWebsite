import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js';
import { URL } from '../../env.js';


export default class GetCriterias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Criterias: []
        };
    }

    componentDidMount() {
        this.retrieveCriterias();
    }

    retrieveCriterias() {

        axios.get(URL + "/criterias/get").then(res => {
            if (res.data.success) {
                this.setState({
                    Criterias: res.data.existingPosts
                });
                console.log(this.state.Criterias)
            }
        })
    }

    deleteCriterias(id) {
        axios.delete( URL +`/criterias/delete/${id}`).then((res) => {
            if (res.data.success) {
                this.retrieveCriterias(); // Refresh the Criterias after deletion
                console.log('Criteria deleted');
            }
        });
    }


    onDelete = (id) => {
        axios.delete( URL +`/criterias/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveCriterias();
        });
    }


    render() {
        return (

            <div >
                <Header />
                <div className='container' >
                    <h3 style={{ height: '150px' }}><b></b></h3>
                    <h3 ><b>Criterias</b></h3>
                    <table className="table" >

                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Criteria</th>
                                <th scope="col">Related Marks</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.Criterias.map((Criterias, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>

                                    <td>{Criterias.NewCriteria}</td>
                                    <td>{Criterias.RelatedMark}</td>
  
                                    <td>
                                        <a className="btn btn-warning" href={`/criterias/edit/${Criterias._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>&nbsp;
                                        <button className='btn btn-danger' href="#" onClick={() => this.onDelete(Criterias._id)}>
                                            <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className='btn btn-success'>
                        <a href='/criterias/add' style={{ textDecoration: 'none', color: 'white' }}>
                            Add New Criterias
                        </a>
                    </button>
<br/>
                </div>
                <br/>
                <Footer />
            </div>
        )
    }
}          