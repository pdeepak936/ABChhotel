import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import CSS file for styling
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

const Footer = () => {

  return (
    <div >
      <ul className="d-flex justify-content-around nav " style={{backgroundColor:"white"}}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <HomeOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-item" style={{marginBottom: "40px"}}>
          <Link to="/taskform" className="nav-link ">
            <button className="floating-button " >
              <h3>+</h3>
            </button>
          </Link>
        </li>
        <li className="nav-item center">
          <Link to="/console" className="nav-link">
            <ListAltOutlinedIcon style={{ marginRight: "5px", marginLeft: "10px" }} />
            <p>Console</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
