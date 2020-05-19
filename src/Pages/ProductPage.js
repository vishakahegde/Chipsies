import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_URL = `http://vmy-json-server.typicode.com/vishakahegde/Chipsies`;


export default function ProductPage() {
    const [chips, setChips] = useState([]);
    
    //   useEffect(() => {
    //     const fetchData = async ()  => {
    //        setChips({loading: true });
    //        const data = await axios.get(
    //          `TBD`
    //        );
    //        setChips();
    //      }
    //      fetchData(); 
    //    }, []);

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
