import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/play">Play</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default NavBar;
