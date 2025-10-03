import React, { useEffect, useState } from "react";
import FetchProducts from "./productFetch";
import { useParams } from "react-router";
import { Link } from "react-router";
import PageNotFound from "../pageNotFound/PageNotFound";
function P_details() {
  const [ArrayOfProducts, setDetails] = useState();
  let { id } = useParams();

  console.log("times");
  useEffect(() => {
    FetchProducts().then((pro) => {
      let singleDetil = pro.products.filter((ele) => {
        return id == ele.id;
      });
      setDetails(singleDetil[0]);
    });
  }, []);
  if (!ArrayOfProducts) {
    return <PageNotFound />;
  }
  return (
    <section className="product-detail fade-in">
      <div className="product-detail-img">
        <div>
          <Link to="/product">&#8666; BACK</Link>
        </div>
        <img src={ArrayOfProducts.images[0]} alt="Product Image" />
      </div>
      <div className="product-detail-info">
        <h2 className="product-title">{ArrayOfProducts.title}</h2>
        <p className="product-price">{ArrayOfProducts.price} $</p>
        <p className="product-desc">{ArrayOfProducts.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </section>
  );
}

export default P_details;
