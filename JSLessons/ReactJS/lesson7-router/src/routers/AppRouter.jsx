import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Nav from "../components/Nav";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import NotFoundPage from '../components/pages/NotFoundPage';
import Footer from "../components/Footer";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route  component={NotFoundPage}></Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
