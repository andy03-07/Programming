import React from 'react'

const notfound = React.memo(
  
  (props)=>{
    console.log("inside child");
  return (
   
<button onClick={props.handleClick}>{props.name}</button>  
    
)
}
)

export default notfound