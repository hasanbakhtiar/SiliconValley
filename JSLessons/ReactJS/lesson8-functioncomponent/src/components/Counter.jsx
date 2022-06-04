import React, { useState } from 'react'

const Counter = (props) => {
    const [deyer,hadise] = useState(props.deyer);

    const increment =()=>{
       deyer>10 ?  hadise(deyer+1) :  hadise(deyer+10)
    }
  return (
    <div className='container mt-5'>
        <button onClick={()=>{if(deyer>0){hadise(deyer-1)}}} className='btn btn-danger mx-3'>-1</button>
        <span>{deyer}</span>
        <button onClick={increment} className='btn btn-success mx-3'>+1</button>

    </div>
  )
}

Counter.defaultProps={
    deyer:0
}

export default Counter