import React ,{useState} from "react";
import Box from "../../../../components/box/Box";
import user from "./users.png";
import Bargraph from "../../../../components/Graph/Bargraph";
import Smallbar from "../../../../components/Smallbar/Smallbar";
import PieChart from "../../../../components/Pie/PieChart";
import data from "./Data";
import Table from "../../../../components/Table/Table";
import Team from "./Team/Team";
import Student from "./Student/Student";
import Trainer from "./Trainer/Trainer";
import "./Admindash.css";
import TrainerTable from "../../../../components/Trainer/TrainerTable";

const SuperDa = () => {
  const [showTeam, setShowTeam] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showTrainer, setShowTrainer] = useState(false);
  
  const ShowTeam = () => {
    setShowTeam(true);
    setShowStudent(false);
    setShowTrainer(false);
  };
  
  const ShowStudent = () => {
    setShowTeam(false);
    setShowStudent(true);
    setShowTrainer(false);
  };
  
  const ShowTrainer = () => {
    setShowTeam(false);
    setShowStudent(false);
    setShowTrainer(true);
  };
  
  if (showTeam) {
    return <Team />;
  } else if (showStudent) {
    return <Student />;
  } else if (showTrainer) {
    return <Trainer />;
  }

  return (
    <div className="admindash">
      <h1 className="heading">Dashboard</h1>

      <div className="boxes">
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
        <Box subhed={"User"} value={"40,689"} logo={user} />
      </div>

      <div className="graphs">
        <Smallbar />
        <PieChart data={[10, 20, 30]} labels={["Red", "Blue", "Yellow"]} />
        <Bargraph />
      </div>

      <div className="tables">
        <div className="hes">
          <h1 className="heading">Teams</h1> <h2 className="subha" onClick={ShowTeam}>View All</h2>
        </div>
        <Table data={data} onViewFull={() => {}} showAction={false} />
     
        <div className="hes">
          <h1 className="heading" >Students</h1>{" "}
          <h2 className="subha"onClick={ShowStudent} >View All</h2>
        </div>
        <Table data={data} onViewFull={() => {}} showAction={false} />
        <div className="hes">
          <h1 className="heading">Trainer</h1>{" "}
          <h2 className="subha" onClick={ShowTrainer}>View All</h2>
        </div>
        <TrainerTable data={data} onViewFull={() => {}} showAction={false} />
      </div>
    </div>
  );
};

export default SuperDa;
