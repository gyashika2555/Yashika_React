
import React, { useState } from 'react'

const Count = () => {

  const [count, setCount] = useState(0);

  const increment=()=>{
    setCount(count+1)
  }

  return (
    <>
      <div>Count:{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Count
