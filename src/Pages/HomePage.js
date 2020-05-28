import React, { useEffect, useState } from "react";
// import {
//   showProducts,
//   sortProductsByPopularity,
// } from "../store/homePage/selector";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart/action";
import { fetchData } from "../store/products/action";
import { selectLoading, selectData } from "../store/products/selector";

export default function HomePage() {
  const dispatch = useDispatch();
  // const [Data, setData] = useState([]);
  const [category, setCategory] = useState("All");

  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
console.log("Homepage data?", data)
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       `https://my-json-server.typicode.com/vishakahegde/Chipsies/products`
  //     );
  //     setData(response.data);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);


  function compare_popularity(product_a, product_b) {
    return product_b.popularity - product_a.popularity;
  }
  function sortedByPopularity() {
    const sortedData = [...data].sort(compare_popularity);
    // setData(sortedData);
  }

  function compare_price(product_a, product_b) {
    let price_a = product_a.price.split(" ")[1];
    let price_b = product_b.price.split(" ")[1];

    return price_b - price_a;
  }

  function sortByPrice() {
    const sortedData = [...data].sort(compare_price);
    // setData(sortedData);
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

  const filteredProduct = data.filter((product) => {
    if (category === "All") {
      return true;
    }
    if (product.categories === category) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      <h1>Delicioups Chips</h1>
      <p>
        <button className="buttons" onClick={sortedByPopularity}>
          Sort By Popularity
        </button>{" "}
        <button className="buttons" onClick={sortByPrice}>
          Sort By Price
        </button>
        <select
          className="buttons"
          onChange={(event) => ProductByCategory(event.target.value)}
        >
          <option value="All">Filter by tag: </option>
          {data.map((product) => {
            return (
              <option value={product.categories}>{product.categories}</option>
            );
          })}
        </select>
      </p>
      <p>{loading ? <p>Loading...</p> : null}</p>
      <div className="container">
        {filteredProduct.map((product) => {
          return (
            <div className="product" key={product.id}>
              <Link to={`/ProductPage/${product.id}`}>
                <h2>{product.title} chips</h2>{" "}
              </Link>
              <p>
                <img className="img" src={product.image} alt={product.title} />{" "}
              </p>
              <p>
                <button>Popularity: {product.popularity}</button>
                <button>Category: {product.categories}</button>
              </p>
              <p>
                <b>Price: {product.price}</b>
              </p>
              <p>
                Add to cart:{" "}
                <button className="buttons" onClick={() => onAddClick(product)}>
                  +
                </button>
                <button className="buttons" onClick={() => onAddClick(product)}>
                  -
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
