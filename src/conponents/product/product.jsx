import React, { useEffect, useState } from "react";
import P_card from "./P_card";
import FetchProducts from "./productFetch";

function Product() {
  let [prod, setProducts] = useState();
  useEffect(() => {
    FetchProducts()
      .then((pro) => {
        setProducts(pro.products);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);
  // if (!prod) {
  //   return <span class="loader"></span>;
  // }
  return (
    <section className="content fade-in">
      <h2>Our Products</h2>
      {prod ? <div className="product-grid">
        {prod.map((value, index) => {
          return (
            <P_card
              src={value.images[0]}
              title={value.title}
              price={value.price}
              key={index}
              id={value.id}
            />
          );
        })}
      </div> : <span className="loader"></span>}
    </section>
  );
}

export default Product;
