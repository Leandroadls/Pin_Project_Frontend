import { useState } from "react";

function Navbar() {

  
  const [colorChange, setColorchange] = useState("");
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange("scrolled");
     }
     else{
       setColorchange("");
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav className={`navbar navbar-expand-md navbar-dark px-4 shadow fixed-top ${colorChange}`}>
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
        </ul>
    </div>
  </nav>
  );
}

export default Navbar;
