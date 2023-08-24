import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div>Sayaç
        <h1>{count}</h1>
        <button onClick={()=> setCount(count+1)}>Başla</button>
    </div>
  )
}

export default Counter