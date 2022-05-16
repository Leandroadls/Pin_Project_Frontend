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
      <div>
        <section id="home" className="container-fluid section-landing">
          <div className="row">
            <div className="row section-navbar section-navbar">
              <Navbar />
            </div>
            <div className="row landing-content" >
              <div className="col-1"></div>
              <div className="col-8"><Landing/></div>
              <div className="col-3"></div>
            </div>
          </div>
        </section>
        <section id="about"><About/></section>
        <section id="products"><Products/></section>
        <section id="services"><Services/></section>
        <div id="contact"><Contact/></div>
      </div>
    );
}

export default App;

// <Navbar></Navbar>
// <Landing></Landing>
// <About></About>
// <Products></Products>
// <Services></Services>
// <Contact></Contact>
