import { useState } from "react";
import logoImg from "../../images/top-logo.png";

function Navbar() {
  const [colorChange, setColorchange] = useState("");
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange("scrolled");
    } else {
      setColorchange("");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`section-navbar navbar navbar-expand-md navbar-dark px-4 fixed-top ${colorChange}`}
    >
      <a className="navbar-brand" href="#">
        <img src={logoImg} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
