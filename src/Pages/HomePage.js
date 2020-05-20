import React from "react";
import { showProducts } from "../store/homePage/selector";
import { useSelector } from "react-redux";

export default function HomePage() {
  const products = useSelector(showProducts);
  console.log("Product:", products);

  return (
    <div>
      <h1>Chips</h1>
      {products.map((product) => {
        return <p>{product.title}</p>;
      })}
    </div>
  );
}
