import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TeamLeader from './Flows/TeamLeader/TeamLeader';
import Student from './Flows/Student/Student';
import TeamMember from "./Flows/TeamMember/TeamMember";
import ClubAdmin from "./Flows/ClubAdmin/ClubAdmin";
import SuperAdmin from "./Flows/SuperAdmin/SuperAdmin";
import Trainer from "./Flows/ClubTrainer/Trainer";
import Landing from "./landing/Landing";
import StudentDashBoard from "./Flows/Student/StudentDashBoard";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import TeamLeaderDashBoard from "./Flows/TeamLeader/TeamLeaderDashBoard";

function App() {
  return (
    // routing 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/student/dashboard"
            element={
              <ProtectedRoute>
                <StudentDashBoard />
              </ProtectedRoute>
            } />

          <Route path="/teamleader" element={<TeamLeader />} />
          <Route path="/teamleader/dashboard"
            element={
              <ProtectedRoute>
                <TeamLeaderDashBoard />
              </ProtectedRoute>
            } />
          <Route path="/teammember" element={<TeamMember />} />
          <Route path="/clubadmin" element={<ClubAdmin />} />
          <Route path="/superadmin" element={<SuperAdmin />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
