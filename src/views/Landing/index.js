
function Landing() {
  return (
    <section id="hero" className="section-general section-landing">
        <div id="carouselHero" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div id="slide1" className="carousel-item active">
              <div className="carousel-caption align-items-center">
                <div className="col-12 text-center">
                    <h2>Sed ut perspiciatis unde omnis iste natus</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque.
                    </p>
                    <button type="button" className="btn btn-primary btn-lg button-landing">
                      Read more
                    </button>
                  </div>
              </div>
            </div>
            <div className="carousel-item" style={{backgroundImage:" url('https://source.unsplash.com/bF2vsubyHcQ/1920x1080')"}}>
              <div className="carousel-caption">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item" style={{backgroundImage:" url('https://source.unsplash.com/szFUQoyvrxM/1920x1080')"}}>
              <div className="carousel-caption">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
  );
}

export default Landing;
