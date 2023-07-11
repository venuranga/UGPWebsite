import { useState } from 'react'
import Loginpage from './pages/Loginpage'
import Homedepthead from './pages/Homedepthead'
import Homepage from './pages/Homepage'
import Homecoordinator from './pages/Homecoordinator'
import Homestudent from './pages/Homestudent'
import Addstudents from './pages/Addstudents'
import Importmarks from './pages/Importmarks'
import Projects from './pages/Projects'
import Addnewcriteria from './marks'
import Viewmarks from './pages/Viewmarks'
import Importmarksheet from './pages/Importmarksheet'
import Importstudentlist from './pages/Importstudentlist'
import Importstudent from './pages/Importstudent'
import Viewstudents from './pages/Viewstudents'
import AnalyzedData from './pages/analyzedData'
import ImportProposalMarks from './pages/ImportProposalMarks'
import ViewProposalMarks from './pages/ViewProposalMarks'
import BarGraph from './components/Bargraph'
//import ProtectedRoute from './components/ProtectedRoutes'
//import AdminRouter from './components/Routes/AdminRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditResults from './pages/FinalEvaluation/EditFinalEva';
import Form from './pages/FinalEvaluation/CreateFinalEvaForm'
import Formpage2 from './pages/FinalEvaluation/GetFinalEva'
import ResultsDetail from './pages/FinalEvaluation/GetOneFinalEva';

import CreateForm from './pages/CoordinatorCriterias/CreateCriteriaForm';
import GetCriterias from './pages/CoordinatorCriterias/GetCriterias';
import EditCriterias from './pages/CoordinatorCriterias/EditCriterias';

import AddProject from './pages/Projects/AddProject';
import GetProject from './pages/Projects/GetProject';
import EditProject from './pages/Projects/EditProject';
import GetOneProject from './pages/Projects/GetOneProject';

import CreatePropEvaForm from './pages/ProposalEvaluation/CreatePropEva';
import EditPropEva from './pages/ProposalEvaluation/EditPropEva';
import GetPropEva from './pages/ProposalEvaluation/GetPropEva';
import CreateProgEvaForm from './pages/ProgressEvaluation/CreateProgEva';
import EditProgEva from './pages/ProgressEvaluation/EditProgEva';
import GetProgEva from './pages/ProgressEvaluation/GetProgEva';

import Homeevaluator from './pages/homeevaluator'

import Deptheadanalyzeddata from './pages/Deptheadanalyzeddata';

import GetProjecthod from './pages/Deptheadproject/GetProject';





// const Roles = {
//   'ModuleCoordinator': 1
// }

//import Exclusive from './pages/Exclusive'

function App() {

  return (

    <Router>
     
    <Routes>
      
   
      <Route path="/" element={<Homepage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Loginpage" element={<Loginpage />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Addstudents" element={<Addstudents />} />


      {/* <Route element = {<ProtectedRoute  />}> */}
        <Route path = "/Homecoordinator" element = {<Homecoordinator />} />
      {/* </Route> */}

      <Route path = "/homeevaluator" element = {<Homeevaluator />} />

      <Route path = "/Homestudent" element = {<Homestudent />} />

      
      <Route path="/Homestudent" element={<Homestudent />} />
      <Route path="/Importmarks" element={<Importmarks />} />
      <Route path="/Importmarksheet" element={<Importmarksheet />} />
      <Route path="/Importstudentlist" element={<Importstudentlist />} />
      <Route path="/Importstudent" element={<Importstudent />} />
      <Route path="/Homedepthead" element={<Homedepthead />} />
      <Route path="/marks" element={<Addnewcriteria />} />
      <Route path="/Viewmarks" element={<Viewmarks />} />
      <Route path = "/Viewstudents" element = {<Viewstudents />} />
      <Route path = "/AnalyzedData" element = {<AnalyzedData />} />
      <Route path = "/ImportProposalMarks" element = {<ImportProposalMarks />} />
      <Route path = "/ViewProposalMarks"  element = {<ViewProposalMarks />} />
      <Route path = "/BarGraph" element = {<BarGraph />} />

      <Route path = "/Deptheadanalyzeddata" element = {<Deptheadanalyzeddata />} />

            {/* evaluations */}
            <Route path="/add" element={<Form />} />
      <Route path="/edit/:id" element={<EditResults />} />
      <Route path="/post/:id" element={<ResultsDetail />} />
      <Route path="/get" element={<Formpage2 />} />

      <Route path="propevaluations/add" element={<CreatePropEvaForm />} />
      <Route path="propevaluations/edit/:id" element={<EditPropEva />} />
      {/* <Route path="propevaluations/post/:id" element={<ResultsDetail />} /> */}
      <Route path="propevaluations/get" element={<GetPropEva />} />

      
     
      <Route path="progevaluations/add" element={<CreateProgEvaForm />} />
      <Route path="progevaluations/edit/:id" element={<EditProgEva />} />
      {/* <Route path="progevaluations/post/:id" element={< />} /> */}
      <Route path="progevaluations/get" element={<GetProgEva />} />
     

     

      <Route path="criterias/add" element={<CreateForm />} />
      <Route path="criterias/get" element={<GetCriterias />} />
      <Route path="criterias/edit/:id" element={<EditCriterias />}/>

      <Route path="projects/add" element={<AddProject />} />
      <Route path="projects/get" element={<GetProject />} />
      <Route path="projects/get/:id" element={<GetOneProject />} />
      <Route path="projects/edit/:id" element={<EditProject />}/>

      <Route path = "GetProjecthod" element = {<GetProjecthod />} />

      

     
    </Routes>
  </Router>

  );
}

export default App;
/*

function App() {
  return <Frame1 {...frame1Data} />;
}



function Frame1(props) {
  const {
    overlapGroup,
    uor,
    unilogo2,
    undergraduateProjectPortal1,
    /*youAreNotLoggedIn,
    overlapGroupContainer,
    undergraduateProjectPortal2,
    logIn,
    usefulLinksDepartm1,

  } = props;

  return (
    <div className = "container-center-horixontal">
    <div className = "frame-1 screen">
    <div className = "group-51">
    <div className = "överlap-group" style = {{backgroundImage: `url(${overlapGroup})`}}>
    <div className = "overlap-group1">
    <div className = "uor valign-text-middle inter-bold-white-20px">
      {uor}
      </div>
      <img className = "unilogo-2" src ={unilogo2} alt = "unilogo 2" />
      </div>

      <div className = "undergraduate-project-portal valign-text-middle inter-bold-white-19=6px">
        {undergraduateProjectPortal1}
      </div>

    

      </div>
      </div>

      <div className = "overlap-group-container" style = {{backgroundImage: `url(${overlapGroupContainer})`}}>
        <div className = "overlap-group2">
          <img className = "rectangle-59" src = "rectangle-59.svg" alt = "Rectangle-59"/>
          <h1 className = "undergraduate-project-portal-1 inter-extra-bold-bahama-blue-48px">
            {undergraduateProjectPortal2}
            </h1>
            </div>
            <div className = "overlap-group3">
              <div className = "log-in valign-text-middle inter-bold-daintree-24px">
                {logIn}
                </div>
                </div>

                <div className = "group-41">
                  <div className = "overlap-group1-1">
                    <p className =   "useful-links-departm valign-text-middle inter-bold-white-16px">
                      {usefulLinksDepartm1}
                      </p>
                      <img className = "rectangle-24"src = "rectangle-23-2.svg" alt = "Rectangle-24"/>
                      <div className = "overlap-group-1">
                
                        
                        </div>
                      </div>
                  
                  </div>
                </div>


              </div>
              </div>
            
  );
}
*/

/*
const frame1Data = {
  overlapGroup: "group-13.png",
  uor: "uor",
  unilogo2: "unilogo-3.png",
  undergraduateProjectPortal1: (
    <React.Fragment>
    UNDERGRADUATE
    <br />
    PROJECT
    <br />
    PORTAL
    </React.Fragment> 
  ),

  /* youAreNotLoggedIn: "You are not logged in",
   overlapGroupContainer: "C:/Users/svenu/Desktop/5thsem/softwareproject/download (1).jpg",
  undergraduateProjectPortal2: (
    <React.Fragment>
      UNDERGRADUATE PROJECT
      <br />
      PORTAL 
      <br />
    </React.Fragment>

  ),

  logIn: "Log In",
 /* usefulLinksDepartm1: (
    <React.Fragment>
      USEFUL LINKS DEPARTMENTS CONTACT USEFUL
      <br />
      <br />

    </React.Fragment>
  ), */




  /* 1 <p className =  "you-are-not-logged-in valign text-middle inter-bold-white-20px">
      {youAreNotLoggedIn}
      </p> */

       /* 2 <p className = "useful-links-departm-1 valin-text-middle inter-bold-white-19px">
                          useful

                          LINKS 
                        </p>

                        */

























/*function App({ onAdd }) {
  const [studentName, setStudentName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ studentName, projectName, marks });
    setStudentName('');
    setProjectName('');
    setMarks('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Student Name:</label>
      <input
        type="text"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
      />

      <label>Project Name:</label>
      <input
        type="text"
        value={projectName}
        onChange={(event) => setProjectName(event.target.value)}
      />

      <label>Marks:</label>
      <input
        type="text"
        value={marks}
        onChange={(event) => setMarks(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

*/


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          UGP
        </a>
      </header>
    </div>
  );
}*/


