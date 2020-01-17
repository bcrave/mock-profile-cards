import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div className="nav-link-wrapper">
      <NavLink to="/" className="nav-link">
        NavLink
      </NavLink>
      <NavLink to="/" className="nav-link">
        NavLink
      </NavLink>
      <NavLink to="/" className="nav-link">
        NavLink
      </NavLink>
      <NavLink to="/" className="nav-link">
        NavLink
      </NavLink>
    </div>
  );
};

export default withRouter(NavigationComponent);
