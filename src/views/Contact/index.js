function Contact() {
  return (
    <div className="container-fluid section-contact">
      <div className="row">
        <div className="col-md-12"></div>
      </div>
      <div className="row">
        <div className="col-md-6 section-form-container">
          <div className="contact-info">
            <h2>Get in touch We are hiring!</h2>
          </div>
          <div className="contact-form">
            <div className="form-group">
              <label className="control-label col-sm-2" for="fname">First Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname" placeholder="Enter First Name" name="fname"></input>
                </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="lname">Last Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname" placeholder="Enter Last Name" name="lname"></input>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2" for="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"></input>
                  </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" for="comment">Comment:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
            </div>
            <div className="form-group">        
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>  
          </div>
        </div>
        <div className="col-md-6 section-image-container">
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>  
  );
}

export default Contact;
