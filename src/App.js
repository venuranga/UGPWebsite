import Loginpage from './pages/Loginpage'
import Homedepthead from './pages/Homedepthead'
import Homepage from './pages/Homepage'
import Homecoordinator from './pages/Homecoordinator'
import Homestudent from './pages/Homestudent'
import Addstudents from './pages/Addstudents'
import Importmarks from './pages/Importmarks'
import Homeevaluator from './pages/Homeevaluator'
import Importmarksheet from './pages/Importmarksheet'
import Importstudentlist from './pages/Importstudentlist'
import Importstudent from './pages/Importstudent'
import Deptheadanalyzeddata from './pages/Deptheadanalyzeddata'
import Deptheadprojects from './pages/Deptheadprojects'
import StudentSubmissions from './pages/StudentSubmissions'
import Criteria from './pages/Criteria'
import EFinalEvaluationMark from './pages/EFinalEvaluationMark'
import EProposalMarks from './pages/EProposalMarks'
import EProgressEvaluationMarks from './pages/EProgressEvaluationMarks'
import newform from './pages/1newform'
import 'bootstrap/dist/css/bootstrap.css';


import Projects from './pages/Projects'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
     
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Loginpage" element={<Loginpage />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Addstudents" element={<Addstudents />} />
      <Route path="/Homecoordinator" element={<Homecoordinator />} />
      <Route path="/Homestudent" element={<Homestudent />} />
      <Route path="/Importmarks" element={<Importmarks />} />
      <Route path="/Importmarksheet" element={<Importmarksheet />} />
      <Route path="/Importstudentlist" element={<Importstudentlist />} />
      <Route path="/Importstudent" element={<Importstudent />} />
      <Route path="/Homeevaluator" element={<Homeevaluator />} />
      <Route path="/Homedepthead" element={<Homedepthead />} />
      <Route path="/Deptheadanalyzeddata" element={<Deptheadanalyzeddata />} />
      <Route path="/Deptheadprojects" element={<Deptheadprojects />} />
      <Route path="/StudentSubmissions" element={<StudentSubmissions />} />
      <Route path="/newform" element={<newform />} />
      <Route path="/Criteria" element={<Criteria />} />
      <Route path="/EFinalEvaluationMark" element={<EFinalEvaluationMark />} />
      <Route path="/EProposalMarks" element={<EProposalMarks />} />
      <Route path="/EProgressEvaluationMarks" element={<EProgressEvaluationMarks />} />

    </Routes>
  </Router>
  );
}

export default App;