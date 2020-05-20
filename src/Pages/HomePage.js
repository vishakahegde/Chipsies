import React, { useEffect, useState } from "react";
// import {
//   showProducts,
//   sortProductsByPopularity,
// } from "../store/homePage/selector";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchData } from "../store/productPage/action";

export default function HomePage() {
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // function compare_popularity(product_a, product_b) {
  //   return product_b.popularity - product_a.popularity;
  // }
  // function sortedByPopularity() {
  //   const sortedData = data.sort(compare_popularity);
  //   setData(sortedData);
  // }

  // console.log("Data", data);

  return (
    <div>
      <h1>Chips</h1>
      {/* <ul>
        {data.map((product) => {
          return (
            <div>
              <li>Product Name: {product.title}</li>
              <li>Price: {product.price}</li>
              <li>Popularity: {product.popularity}</li>
            </div>
          );
        })}
      </ul>
      <button onClick={sortedByPopularity}>Sort By Popularity</button> */}
    </div>
  );
}
