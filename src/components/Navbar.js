import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teacher">Teacher</NavLink>
        <NavLink to="/student">Student</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
