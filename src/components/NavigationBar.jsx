import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
const NavigationBar = () => {
  return (
    <div className="nav-bar-container">
      <NavLink className={'button-1'}>
        <img src="/static/images/boton1.png" alt="" />
      </NavLink>
      <NavLink>
        <img src="/static/images/boton2.png" alt="" />
      </NavLink>
      <NavLink>
        <img src="/static/images/boton3.png" alt="" />
      </NavLink>
      <NavLink>
        <img src="/static/images/boton4.png" alt="" />
      </NavLink>
    </div>
  );
};

export default NavigationBar;
