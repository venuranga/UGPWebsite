import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import { URL } from '../../env.js';



export default class GetProgEva extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProgResults: []
        };
    }

    componentDidMount() {
        this.retrieveProgResults();
    }

    retrieveProgResults() {
        axios.get(URL + "/progevaluations/get").then(res => {
            if (res.data.success) {
                this.setState({
                    ProgResults: res.data.existingPosts
                });
                console.log(this.state.ProgResults)
            }
        })
    }

    deleteResult(id) {
        axios.delete(URL + `/progevaluations/delete/${id}`).then((res) => {
            if (res.data.success) {
                this.retrieveProgResults(); // Refresh the results after deletion
                console.log('Result deleted');
            }
        });
    }


    onDelete = (id) => {
        axios.delete(URL + `/progevaluations/delete/${id}`).then((res) => {
            alert("Deleted Successfully");
            this.retrieveProgResults();
        });
    }


    render() {
        return (

            <div >
                <Header />
                <div className='container' >
                    <h3 style={{ height: '150px' }}><b></b></h3>
                    <h3 ><b>Progress Evaluation</b></h3>
                    <table className="table" >
                        <thead>
                            <tr>

                                <th scope="col">Group No</th>
                                <th scope="col">Registration No</th>
                                <th scope="col">Presentation and Viva</th>
                                <th scope="col">Contribution </th>


                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ProgResults.map((progResult, index) => (
                                <tr key={index}>
                                    {/* <th scope="row">{index + 1}</th> */}
                                    <td>{progResult.GrpNo}</td>
                                    <td>
                                        <a href={`/post/${progResult._id}`} style={{ textDecoration: 'none' }}>
                                            {progResult.RegNo}
                                        </a>
                                    </td>
                                    <td>{progResult.criteriaProg1}</td>
                                    <td>{progResult.criteriaProg2}</td>

                                    <td>

                                        <a className="btn btn-warning" href={`/progevaluations/edit/${progResult._id}`}>
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>

                                        &nbsp;
                                        <button className='btn btn-danger' href="#" onClick={() => this.onDelete(progResult._id)}>
                                            <i className='fas fa-trash-alt'></i>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className='btn btn-success'>
                        <a href='/progevaluations/add' style={{ textDecoration: 'none', color: 'white' }}>
                            update table
                        </a>
                    </button>

                </div>
                <Footer />
            </div>
        )
    }
}          