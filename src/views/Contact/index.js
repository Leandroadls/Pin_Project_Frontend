import contactImg from '../../images/contact-image.png';

function Contact() {
  return (
    <section className="section-general contact ">
      <div className="container section-contact">
        <div className="row">
          <div className="col-12 col-md-5 section-form-container">
            <div className="contact-info">
              <h2>Get in touch <span>We are hiring!</span></h2>
            </div>
            <div className="contact-form">
              <div className="form-group">
                  <div className="col-sm-10">          
                    <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                  </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-10">          
                    <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                  </div>
              </div>
              <div className="form-group">
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                    </div>
              </div>
              <div className="form-group">
                  <div className="col-sm-10">
                    <textarea className="form-control" placeholder="Comment" rows="5" id="Message"></textarea>
                  </div>
              </div>
              <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>  
            </div>
          </div>
          <div className="col-12  col-md-7 section-image-container">
            <img src={contactImg}  />
          </div>
        </div>
      
      </div>
    </section>  
  );
}

export default Contact;
