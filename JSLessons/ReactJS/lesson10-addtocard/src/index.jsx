import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Products from "./components/Products";
import Example from "./lifeCycle/Example";

const App =()=>{
    return(
      <>
      <Example />
      </>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));
