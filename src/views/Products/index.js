import productImg from "../../images/section3-image.png";

import { useState, useEffect } from "react";
import axios from "axios";

import ProductsList from "./components/ProductsList";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://pin-backtest-ramiro.herokuapp.com/api/products")
      .then((response) => {
        setProducts(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <section className="section-general products">
      <div className="container">
        <div className="row align-items-center section-products">
          <ProductsList products={products} />
          <img src={productImg} />
        </div>
      </div>
    </section>
  );
}

export default Products;
