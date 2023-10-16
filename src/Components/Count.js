import React, { useState } from 'react'

const Count = () => {
    
    const [math , setMath] = useState(0)
 
    const add = ()=>{
        let a = math + 1;
        setMath(a)
    }


    const sub = ()=>{

        let a = math - 1;
        setMath(a)
    }
  return (

    <div className="m-3 m-auto">
       <button className="btn btn-primary m-3" onClick={add}>Addition</button>

       <button className="btn btn-primary" onClick={sub}>Subtraction</button>

        <div>Count : {math}</div>
    </div>

  )
}

export default Count