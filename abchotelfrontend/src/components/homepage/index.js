import React from "react";
import "./style.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Card from "../card/card";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/index";
import axios from "axios";

const Home = () => {

  const hendelStatus = async (status) => {
    // try {
    //   const data = await axios.get("http://localhost:8000/tasksByStatus", {
    //     status: status
    //   });
    //   console.log(data.data);
    // } catch (error) {
    //   console.error("Error updating status:", error);
    // }
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "status": "Scheduled"
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8000/tasksByStatus", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
  };
  

  return (
    <>
      <Header />
      <div className="d-flex">
        <div className="col-lg-2 col-md-2 col-sm-0">
          <Sidebar />
        </div>
        <div className="main-page col-lg-9 col-md-9 col-sm-12">
          <h2 className="task-title">Task of the day</h2>
          <nav className="all_task">
            <NavLink className="all_task_tab" onClick={()=>hendelStatus("Not Accepted")} >
              Not Accepted
            </NavLink>
            <NavLink className="all_task_tab" onClick={()=>hendelStatus("Ongoing")} >
              Ongoing
            </NavLink>
            <NavLink className="all_task_tab" onClick={()=>hendelStatus("Scheduled")}>
              Scheduled
            </NavLink>
            <NavLink className="all_task_tab" to="/completed">
              Completed
            </NavLink>
            <NavLink className="all_task_tab" to="/delayed">
              Delayed
            </NavLink>
            <NavLink className="all_task_tab" to="/ontime">
              Ontime
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/users" element={<></>} />
            <Route path="/posts" element={<></>} />
            <Route path="/contact" element={<></>} />
            <Route path="/form" element={<></>} />
          </Routes>
          <hr />
          <div>
            <div className="">
              <div className="card-wrapper">
                <div className="row">
                    <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
