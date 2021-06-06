import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="sidenav">
    <br></br>
    <br></br>
    <Link to="/">
      <h1 id="navbar-maria-fernanda">☆ María Fernanda</h1>
    </Link>
    <h4>
      software engineer, artist, <p></p> game designer, 3D animator
    </h4>
    <br></br>
    <br></br>
    <br></br>
    <nav className="navbar-first-links">
      <Link to="/" id="first-link">
        Code
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Animation
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Games
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Misc
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/" id="first-link">
        About Me
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Artst Statement
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Resumes
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Vimeo / itch.io
      </Link>
      <br></br>
      <Link to="/" id="first-link">
        Github / LinkedIn
      </Link>
      <br></br>
    </nav>
  </div>
);

export default Navbar;
