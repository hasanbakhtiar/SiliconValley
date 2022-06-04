import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="d-flex ">
          <li className="ms-5"><Link to="/">Home</Link></li>
          <li className="ms-5"><Link to="/about">About</Link></li>
          <li className="ms-5"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return <h1>Home</h1>;
  }
}

class About extends Component {
  render() {
    return <h1>About</h1>;
  }
}

class Contact extends Component {
  render() {
    return <h1>Contact</h1>;
  }
}

class NotFoundPage extends Component {
  render() {
    return <h1>404 not found</h1>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="container mt-3">
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
