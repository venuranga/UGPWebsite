import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { URL } from '../../env.js'; 



export default class GetPropEva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PropResults: []
        };
    }

    componentDidMount() {
        this.retrievePropResults();
    }

    retrievePropResults() {
        axios.get(URL + "/propevaluations/get").then(res => {
            if (res.data.success) {
                this.setState({
                    PropResults: res.data.existingPosts
                });
                console.log(this.state.PropResults)
            }
        })
    }

    deleteResult(id) {
        axios.delete(URL + `/propevaluations/delete/${id}`).then((res) => {
            if (res.data.success) {
                this.retrievePropResults(); // Refresh the results after deletion
                console.log('Result deleted');
            }
        });
    }


    onDelete = (id) => {
        axios.delete(URL + `/propevaluations/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrievePropResults();
        });
    }


    render() {
        return (

            <div >
                <Header />
                <div className='container' >
                    <h3 style={{ height: '150px' }}><b></b></h3>
                    <h3 ><b>Proposal Evaluation</b></h3>
                    <table className="table" >
                        <thead>
                            <tr>

                                <th scope="col">Group No</th>
                                <th scope="col">Registration No</th>
                                <th scope="col">Report (Group)</th>
                                <th scope="col">Presentation and Viva (Individual) </th>


                            </tr>
                        </thead>
                        <tbody>
                            {this.state.PropResults.map((propResult, index) => (
                                <tr key={index}>
                                    {/* <th scope="row">{index + 1}</th> */}
                                    <td>{propResult.GrpNo}</td>
                                    <td>
                                        <a href={`/post/${propResult._id}`} style={{ textDecoration: 'none' }}>
                                            {propResult.RegNo}
                                        </a>
                                    </td>
                                    <td>{propResult.criteriaProp1}</td>
                                    <td>{propResult.criteriaProp2}</td>

                                    <td>

                                        <a className="btn btn-warning" href={`/propevaluations/edit/${propResult._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>

                                        &nbsp;
                                        <button className='btn btn-danger' href="#" onClick={() => this.onDelete(propResult._id)}>
                                            <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className='btn btn-success'>
                        <a href='/propevaluations/add' style={{ textDecoration: 'none', color: 'white' }}>
                            update table
                        </a>
                    </button>

                </div>
                <Footer />
            </div>
        )
    }
}          