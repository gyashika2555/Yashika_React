

import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    // useEffect(Callback,dependancy array)
    useEffect(()=>{
        alert("Button clicked")
    },[])

    return (
        <>
            <div>UseEffect</div>
            <div>Count:{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <div>Count Two:{countTwo}</div>
            <button onClick={() => setCountTwo(countTwo + 1)}>-</button>
            
        </>
    )
}

export default UseEffect
