import React from "react";
import logo from "../images/logo.svg";

export default function NavBar() {
  return (
    <div>
      <section className="nav-bar">
        <div className="logo-icon">
          <img src={logo}></img>
          <h1 className="tabs">Features</h1>
          <h1 className="tabs">Company</h1>
          <h1 className="tabs">Careers</h1>
          <h1 className="tabs">About</h1>
        </div>
      </section>

      <section className="hero"></section>
    </div>
  );
}
