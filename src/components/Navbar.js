import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
return (
    <div>
    <NavLink activeStyle={{background: "lightpink"}} exact to="/">Home</NavLink>{" | "}
    <NavLink activeStyle={{background: "lightpink"}} to="/CartPage">Cart</NavLink>{" | "}
    <NavLink activeStyle={{background: "lightpink"}} to="/ProductPage">Products</NavLink>
    </div>
)
}