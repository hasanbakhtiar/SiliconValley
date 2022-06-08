import React, { useState, useEffect } from 'react'

// class Example extends Component{
//     constructor(props){
//         super(props);
//         this.decrement= this.decrement.bind(this);
//         this.state={
//             count:0
//         }

//             console.log('constructor is running...');
//     }
//     componentDidMount(){
//         console.log("componentDidMount is running...");
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate is running...");
//         document.querySelector('span').style.color = "red";
//     }
//     decrement(){
//         this.setState({
//             count:this.state.count -1
//         })
//     }
   
//     render(){
//         return(
//             <>
//             <button onClick={this.decrement}>-1</button>
//             <span>{this.state.count}</span>
//             <button>+1</button>

//             </>
//         )
//     }
// }

const Example =()=>{
    const[count,setCount]= useState(0);
    useEffect(()=>{
        console.log("1");
    },[count])
      
    return(
        <>
        
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <span>{count}</span>
        </>
    )   
}

export default Example