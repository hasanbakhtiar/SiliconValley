import React from "react";

// const ExampleProps = (props) => {
//   return (
//     <div className="container">
//       <h1>
//           {props.text}
//       </h1>
//     </div>
//   );
// };



// const ExampleProps = props => {
//     return (
//       <div className="container">
//         <h1>
//             {props.text}
//         </h1>
//       </div>
//     );
//   };

  const ExampleProps = ({text,numberInfo}) => {
    return (
      <div className="container">
        <h1>
            {text}
        </h1>
        <p>{numberInfo}</p>
      </div>
    );
  };
export default ExampleProps;
