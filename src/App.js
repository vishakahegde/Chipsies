import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/CartPage" component={CartPage} />
        <Route path="/ProductPage/:productId" component={ProductPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
