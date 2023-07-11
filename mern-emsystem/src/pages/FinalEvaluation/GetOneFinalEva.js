import React, { Component } from 'react'
import axios from 'axios'
import { URL } from '../../env';

export default class ResultsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          FinalResults: []
        };
    }

    componentDidMount() {
        console.log(this.props.match); // Check the value of this.props.match
      
        const id = this.props.match.params.id;
        console.log(id); // Check the value of id
      
        axios.get(URL + `/evaluations/${id}`).then(res => {
          console.log(res.data); // Check the response data
          if (res.data.success) {
            this.setState({
              FinalResults: res.data.existingPosts
            });
            console.log(this.state.FinalResults);
          }
        });
      }
      


    render() {
       
const { FinalResults, loading, error } = this.state;
const { GrpNo, RegNo, criteria1, criteria2,criteria3,criteria4 } = FinalResults;

        return (
            <div style={{ marginTop: '100px' }}>
                <h4>{FinalResults}</h4>
                <hr />
                <dl className='row'>
                <dt className='col-sm-3'>Group No</dt>
                    <dd className='col-sm-9'>{GrpNo}</dd>
                    <dt className='col-sm-3'>Registration No</dt>
                    <dd className='col-sm-9'>{RegNo}</dd>
                    <dt className='col-sm-3'>Criteria 1</dt>
                    <dd className='col-sm-9'>{criteria1}</dd>
                    <dt className='col-sm-3'>Criteria 2</dt>
                    <dd className='col-sm-9'>{criteria2}</dd>
                    <dt className='col-sm-3'>Criteria 3</dt>
                    <dd className='col-sm-9'>{criteria3}</dd>
                    <dt className='col-sm-3'>Criteria 4</dt>
                    <dd className='col-sm-9'>{criteria4}</dd>

                </dl>
            </div>
        )
    }
}



// import React, { Component } from 'react';
// import axios from 'axios';

// export default class ResultsDetail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Results: {},
//             loading: true,
//             error: ''
//         };
//     }

//     componentDidMount() {
//         const id = this.props.match.params.id;

//         axios
//             .get(`http://localhost:8000/evaluations/${id}`)
//             .then(res => {
//                 if (res.data.success) {
//                     this.setState({
//                         Results: res.data.existingPosts,
//                         loading: false
//                     });
//                 } else {
//                     throw new Error(res.data.message);
//                 }
//             })
//             .catch(error => {
//                 this.setState({
//                     error: 'Failed to fetch data',
//                     loading: false
//                 });
//                 console.log(error);
//             });
//     }

//     render() {
//         const { Results, loading, error } = this.state;
//         const { RegNo, criteria1, result } = Results;

//         return (
//             <div style={{ marginTop: '100px' }}>
//                 {loading ? (
//                     <p>Loading...</p>
//                 ) : error ? (
//                     <p>{error}</p>
//                 ) : (
//                     <>
//                         <h4>{result}</h4>
//                         <hr />
//                         <dl className='row'>
//                             <dt className='col-sm-3'>Reg No</dt>
//                             <dd className='col-sm-9'>{RegNo}</dd>
//                             <dt className='col-sm-3'>Criteria</dt>
//                             <dd className='col-sm-9'>{criteria1}</dd>
//                         </dl>
//                     </>
//                 )}
//             </div>
//         );
//     }
// }
