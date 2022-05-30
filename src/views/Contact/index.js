import { useState } from "react";
import axios from "axios";
import contactImg from "../../images/contact-image.png";

function Contact() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const handleChange = function (event) {
    setShowAlert(false);
    setShowErrorAlert(false);

    const property = event.target.id;
    const value = event.target.value;
    setUserInput({ ...userInput, [property]: value });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    axios({
      url: "https://grupo4-backend.herokuapp.com/api/messages",
      method: "POST",
      data: userInput,
    })
      .then((result) => {
        console.log(result);
        setShowAlert(true);
        setUserInput({ name: "", email: "", phone: "", message: "" });
      })
      .catch(function (error) {
        setShowErrorAlert(true);
        console.log(error.response.data)
        // if (error.response) {

        // }
      });
  };

  return (
    <section className="section-general contact ">
      <div className="container section-contact">
        <div className="row">
          <div className="col-12 col-md-5 section-form-container">
            <div className="contact-info">
              <h2>
                Get in touch <span>We are hiring!</span>
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={userInput.name}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={userInput.email}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                    name="phone"
                    value={userInput.phone}
                  ></input>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10">
                  <textarea
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    id="message"
                    name="message"
                    value={userInput.message}
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg button-contact"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
            {showAlert && (
              <div className="alert alert-success">
                Your message was sent successfully
              </div>
            )}
            {showErrorAlert && (
              <div className="alert alert-success">An error has occurred</div>
            )}
          </div>
          <div className="col-12  col-md-7 section-image-container">
            <img className="img-fluid" src={contactImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
