import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "../components/layouts/Nav";
import Basket from "../components/pages/Basket";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import { CartProvider} from 'react-use-cart';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/cart" component={Basket}></Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
