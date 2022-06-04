import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ExampleProps from "./components/ExampleProps";
// import Counter from "./components/Counter";

// function App (){
//     return(
//         <h1>Hello</h1>
//     )
// }

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <ExampleProps text="Hello" numberInfo="2022" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
