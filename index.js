import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
/* ReactHooks */
function ReactHooks(){
  const [count, updatecount] = useState(0)
  useEffect(()=>{
    alert("hello reactjs")
  })
  return(
    <div>
      <h1>you clicked the below button {count} time </h1> 
      <button onClick={()=>updatecount(count + 1)}>
        click the button
      </button>
    </div>
  )

}



ReactDOM.render(<ReactHooks/>, document.getElementById('root'))
