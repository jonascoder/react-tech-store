import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Card from "./pages/CardPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/Default";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/card" component={Card} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
