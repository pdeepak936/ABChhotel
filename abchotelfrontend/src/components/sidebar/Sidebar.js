// Sidebar.js
import React from "react";
import "./sidebar.css"
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Sidebar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light desplaynone" >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ width: "100%" }}>
        <div class="navbar-nav flex-column">
        <div  style={{ backgroundColor: "#F0F0F0", display: "flex", alignItems: "center", margin: "0", padding: "0" }}>
    <HomeOutlinedIcon style={{ marginRight: "5px" , marginLeft: "10px"}} />
    <a className="nav-item nav-link active" href="#">
      <h3 style={{ color: "black", margin: "0" }}>Home</h3>
    </a>
  </div>
  <hr style={{ color: "#DC5B19", height: "10px", margin: "0" , padding: "0"}}/>

          <div className="pt-3" style={{ display: "flex", alignItems: "center" }}>
            <ListAltOutlinedIcon style={{ marginRight: "5px" , marginLeft: "10px" }} />
            <a class="nav-item nav-link" href="#">
              <h3 style={{color:"black"}}>Console</h3>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CalendarTodayOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a class="nav-item nav-link" href="#">
            <h3 style={{color:"black"}}>Attendance</h3>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AutoGraphOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a class="nav-item nav-link" href="#">
            <h3 style={{color:"black"}}>Overview</h3>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <PersonOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <a class="nav-item nav-link" href="#">
            <h3 style={{color:"black"}}>Staff</h3>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ControlPointIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <Link to="/taskform" className="nav-item nav-link">
            <h3 style={{color:"black"}}>Add Task</h3>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
