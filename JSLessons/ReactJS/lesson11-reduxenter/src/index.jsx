import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

const baslangicState = {
    say:0
}

const umumiStore = createStore((deyer=baslangicState,hadise)=>{
            switch(hadise.type){
                case "ARTIR":
                    const yenimulumat = typeof hadise.artirmaqUcun === "number" ? hadise.artirmaqUcun : 1;
                    return{say:deyer.say + yenimulumat} 
                    // return {say: deyer.say + 1}
                case "AZALT":
                    return {say:deyer.say - 1}
                case "SIFIRLA":
                    return {say:0}
                default :
                return deyer
            }
})

umumiStore.subscribe(()=>{
    console.log(umumiStore.getState());
})

umumiStore.dispatch({
    type:"ARTIR",
    artirmaqUcun: 100

})

umumiStore.dispatch({
    type:"AZALT"
})

umumiStore.dispatch({
    type:"SIFIRLA"
})


umumiStore.dispatch({
    type:"ARTIR"
})

const App=()=>{
    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);































// import React from 'react';
// import ReactDOM from 'react-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


// // const List =({a,b,c})=>{
// //     return(
// //         <ul>
// //             <li>{a}</li>
// //             <li>{b}</li>
// //             <li>{c}</li>
// //         </ul>
// //     )
// // }


// const App=()=>{
//         return(
//             <div>
//                 {/* <List a="Hello" b="Hello One" c="Hello Two"/> */}
//             </div>
//         )
// }

// ReactDOM.render(<App/>,document.getElementById('root'));


