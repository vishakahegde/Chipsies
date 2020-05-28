import React, { useEffect, useState } from "react";
// import {
//   showProducts,
//   sortProductsByPopularity,
// } from "../store/homePage/selector";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { fetchData } from "../store/productPage/action";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart/action";

export default function HomePage() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/vishakahegde/Chipsies/products`
      );
      setData(response.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   dispatch(fetchData());
  // }, [dispatch]);

  function compare_popularity(product_a, product_b) {
    return product_b.popularity - product_a.popularity;
  }
  function sortedByPopularity() {
    const sortedData = [...data].sort(compare_popularity);
    setData(sortedData);
  }

  function compare_price(product_a, product_b) {
    let price_a = product_a.price.split(" ")[1];
    let price_b = product_b.price.split(" ")[1];

    return price_b - price_a;
  }

  function sortByPrice() {
    const sortedData = [...data].sort(compare_price);
    setData(sortedData);
  }

  function ProductByCategory(category) {
    setCategory(category);
    // console.log("Data", category);
    // if (category !== "All") {
    //   const newData = data.filter((product) => {
    //     return product.categories === category;
    //   });
    //   setData(newData);
    // }
  }
  function onAddClick(product) {
    dispatch(addToCart(product));
    console.log("trying to add product", product);
  }

  return (
    <div>
      <h1>Delicious Chips</h1>
      <p>
        <button onClick={sortedByPopularity}>Sort By Popularity</button>{" "}
        <button onClick={sortByPrice}>Sort By Price</button>
        <label> Filter by tag: </label>
        <select onChange={(event) => ProductByCategory(event.target.value)}>
          <option value="All">All</option>
          {data.map((product) => {
            return (
              <option value={product.categories}>{product.categories}</option>
            );
          })}
        </select>
      </p>
      <div className="container">
      {data.map((product) => {
        if (category === "All") {
          return (
            <div className="product" key={product.id}>
              <Link to={`/ProductPage/${product.id}`}>
                <h2>{product.title} chips</h2>{" "}
              </Link>
              <p>
                <img className="img"
                  src={product.image}
                  alt={product.title}
                />{" "}
              </p>
              <p>
                <button>Popularity: {product.popularity}</button>
                <button>Category: {product.categories}</button>
              </p>
              <p>Price: {product.price}</p>
              <p>
                Add to cart:{" "}
                <button onClick={() => onAddClick(product)}>+</button>
                <button onClick={() => onAddClick(product)}>-</button>
              </p>
            </div>
          );
        } else if (product.categories === category) {
          return (
            <div>
              <h2>Product Name: {product.title}</h2>
              <p>
                Price: {product.price} {" | "}
                Popularity: {product.popularity}
              </p>
              <p>
                <Link to={`/ProductPage/${product.id}`}>
                  <button>Show details</button>
                </Link>{" "}
                Add to cart:{" "}
                <button onClick={() => onAddClick(product)}>+</button>
                <button onClick={() => onAddClick(product)}>-</button>
              </p>
            </div>
          );
        }
      })}
      </div>
    </div>
  );
}
