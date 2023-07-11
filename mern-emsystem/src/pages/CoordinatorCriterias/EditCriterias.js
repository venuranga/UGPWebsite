import React, { Component } from 'react'
import Header from '../../components/Header.js'

export default class EditCriterias extends Component {
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
                    <a href='/' style={{ textDecoration: 'none', color: 'white' }}>
                        Update Criterias
                    </a>
                </button>

            </div>

        </div>
    )
}
}
