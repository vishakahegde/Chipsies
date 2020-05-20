import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
        Cart
      </NavLink>
    </div>
  );
}
