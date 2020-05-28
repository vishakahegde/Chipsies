import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import {selectProduct} from "../store/productPage/selector"
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart/action";
import { fetchData } from "../store/products/action";
import { selectLoading, selectData } from "../store/products/selector";

export default function ProductPage() {
  const dispatch = useDispatch();
  const params = useParams();
  // const [chips, setChips] = useState([]);
  // const [loadingData, setLoadingData] = useState(false);
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  //   console.log("param:", params)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoadingData(true);
  //     const data = await axios.get(
  //       "http://my-json-server.typicode.com/vishakahegde/Chipsies/products"
  //     );
  //     //   console.log("data:", data.data);

  //     setChips(data.data);
  //     setLoadingData(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const filteredChips = data.find((chip) => {
    //   console.log("chip?", chip)

    if (parseInt(params.productId) === chip.id) {
      return true;
    } else {
      return false;
    }
  });
  // console.log("filter ok?", filteredChips);

  if (loading === true || !filteredChips) {
    return <h1>Loading...</h1>;
  }
  function onAddClick(product) {
    dispatch(addToCart(product));
    console.log("trying to add product", product);
  }

  return (
    <div>
      <h1>{filteredChips.title}</h1>
      <p>
        tags: <button className="buttons">{filteredChips.categories}</button>
        <button className="buttons">
          {filteredChips.popularity}th popular
        </button>
      </p>
      <img
        width="50%"
        height="50%"
        src={filteredChips.image}
        alt={filteredChips.title}
      />
      <p>{filteredChips.description}</p>
      <h3>Price: {filteredChips.price}</h3>
      <p>
        Add to cart:{" "}
        <button className="buttons" onClick={() => onAddClick(filteredChips)}>
          +
        </button>
        <button className="buttons" onClick={() => onAddClick(filteredChips)}>
          -
        </button>
      </p>
      <p>
        <Link to="/">Return to all chipsies</Link>
      </p>
    </div>
  );
}
