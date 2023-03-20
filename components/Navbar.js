import React from "react";
import { BsGlobe } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="navbar">
      <BsGlobe className="navbar--icon" />
      <span className="navbar--title">My Travel Journal</span>
    </div>
  );
}
