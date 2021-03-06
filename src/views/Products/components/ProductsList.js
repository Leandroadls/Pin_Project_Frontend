//import ProductCarousel from "./ProductCarousel";

import React, { useState } from "react";

function ProductsList(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="col-12 col-lg-8">
      <div
        id="carouselProduct"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {props.products.map((product, index) => {
            return (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <div className="carousel-caption align-items-center">
                  <div className="col-12 text-center">
                    <div>
                      <h2>{product.name}</h2>
                      <h4>{product.description}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ProductsList;

/* return (
  <div>
    {
      //console.log("esto son los productos" + props.products)
      <ul>
        {props.products.map((product, index) => {
          return (
            <li key={index}>
              <h1>{product.name}</h1>
            </li>
          );
        })}
      </ul>
    }
  </div>
);

return (
  <div className="col-12 col-lg-8">
    <div
      id="carouselProduct"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselProduct"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-caption align-items-center">
            <div className="col-12 text-center">
              <h4>Sed ut perspiciatis</h4>
              <h2>Nemo Enim</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <h5>Second slide label</h5>
            <p>
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <h5>Third slide label</h5>
            <p>
              Some representative placeholder content for the third slide.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselProduct"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselProduct"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
); */
