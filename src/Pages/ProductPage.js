import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {selectProduct} from "../store/productPage/selector"
import { Link } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();
  const [chips, setChips] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  //   console.log("param:", params)

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      const data = await axios.get(
        "http://my-json-server.typicode.com/vishakahegde/Chipsies/products"
      );
      //   console.log("data:", data.data);

      setChips(data.data);
      setLoadingData(false);
    };
    fetchData();
  }, []);

  const filteredChips = chips.find((chip) => {
    //   console.log("chip?", chip)

    if (parseInt(params.productId) === chip.id) {
      return true;
    } else {
      return false;
    }
  });
    console.log("filter ok?", filteredChips)

  if (loadingData === true || !filteredChips) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{filteredChips.title}</h1>
      <p>tags: <button>{filteredChips.categories}</button>
      <button>{filteredChips.popularity}th popular</button>
      </p>
      <img width="30%" height="30%" src={filteredChips.image} alt={filteredChips.title}/>
      <p>{filteredChips.description}</p>
      <h2>{filteredChips.price}</h2>
      <p><Link to="/">See all chipsies</Link></p>
    </div>
  );
}
