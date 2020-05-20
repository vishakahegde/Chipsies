import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {selectProduct} from "../store/productPage/selector"
// import { Link } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();
  const [chips, setChips] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  // console.log("param:", params)

  useEffect(() => {
    const fetchData = async () => {
         setLoadingData(true);
      const data = await axios.get(
        "http://my-json-server.typicode.com/vishakahegde/Chipsies/products"
      );
      console.log("data:", data.data);

         setChips(data.data);
         setLoadingData(false)
    };
    fetchData();
  }, []);

  const loading = loadingData === true ? <h1>Loading...</h1> : null

  const filteredChips = chips.filter(chip => {
      console.log("chip?", chip)

    if (params === chip.title) {
        return true
    } else {
        return false
    }
  })
  console.log("filter ok?", filteredChips)
  

  return (
    <div>
      {filteredChips}
      {loading}
      
    </div>
  );
}
