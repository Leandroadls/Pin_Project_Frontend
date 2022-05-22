import { useState } from "react";
import Landing from "./views/Landing";
import Navbar from "./views/Navbar";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Products from "./views/Products";
import "./App.css";
import "./styles/app.css";

function App() {

  return ( 
  <>
  <header>
   <Navbar />
  </header>
    <main>
      <Landing />
      <About />
      <Products />
      <Services />
      <Contact />
      </main>
      <footer>
        Footer
      </footer>
    
</>
  );
}

export default App;

// <Navbar></Navbar>
// <Landing></Landing>
// <About></About>
// <Products></Products>
// <Services></Services>
// <Contact></Contact>
