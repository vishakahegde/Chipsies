import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
import { amountOfItemsInCart } from "../store/cart/selector";

export default function Navbar() {
  const amountItemsInCart = useSelector(amountOfItemsInCart);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 80,
        marginLeft: 80,
      }}
    >
      <NavLink activeStyle={{ background: "lightpink" }} exact to="/">
        Home
      </NavLink>
      <NavLink activeStyle={{ background: "lightpink" }} to="/CartPage">
        Cart: {amountItemsInCart}
      </NavLink>
    </div>
  );
}
