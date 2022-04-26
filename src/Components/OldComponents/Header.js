import React from "react";
import "./Background.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">

      <NavLink to="/" style={({ isActive }) => {return {color: isActive ? "yellow" : "white",textDecoration: "none"}}}> Home </NavLink> 

      <NavLink to="/students" style={({ isActive }) => {return {color: isActive ? "yellow" : "white",textDecoration: "none"}}}> Students </NavLink>

      <NavLink to="/contactus"style={({ isActive }) => {return {color: isActive ? "yellow" : "white",textDecoration: "none"}}}> Contact Us </NavLink>

    </div>
  );
};

export default Header;
