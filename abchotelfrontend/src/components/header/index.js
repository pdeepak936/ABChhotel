import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import User from "../user";

const Header = () => {
  return (
    <header className="header container-flux">
      <div className="header_logo">
        <h1 className="logo">ABCHotel</h1>
      </div>
      <nav className="header_pages">
        <NavLink className="navlink" to="/">
         <NotificationsNoneIcon style={{fontSize:"35px", color:"#818181", padding:"0", margin:0 }}/>
        </NavLink>
        <NavLink className="navlink" to="/users">
          <User/>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
