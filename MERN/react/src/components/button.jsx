// import React from 'react'

// const button = (props) => {
//   return (
//     <div><input type='text' onChange={(e)=>props.setname(e.target.value)}/>
     
    
//         <h1>type and what:{props.name}</h1></div>
//   )
// }

// export default button



import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const button = () => {
  return (
    <div>
      <ul>
        <li>
          <a href='/'>home</a>
        </li>
        <li>
          {/* <NavLink to="/about" className={(isActive)=> isActive?"active-link":""}>about</NavLink> */}
          <a href='/about'>about</a>
          </li>
        
      </ul>
    </div>
  );
};

export default button;