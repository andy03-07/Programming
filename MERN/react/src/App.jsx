import React, { createContext, useCallback, useRef, useState } from "react";
import "./App.css";
import Memo from './components/usememo'
// import { useEffect } from 'react';
// import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import Home from './components/home';
import About from './components/about';
// import Paramcomp from './components/paramcomp';
// import Submit from './components/submit';
// import Redux from './components/reduxope';
// import Login from './components/login';
// import Logout from './components/logout';
// import Ca from './components/ca'
// import Counter from './components/counter'
// import Button from './components/button'
// import Timer from './components/timercompo'
// import Notfound from './components/notfound'

// const Usercontext=createContext();
// const router=createBrowserRouter(
//   [{path:"/",
//     element:
//     <div>
//     <Home/>,
//     </div>
//   },
//     {path:"/about",
//       element: <div>
//       <About/>,
//       </div>,
//       children:
//       [
//         {path:'timercompo',
//           element:<Timer/>
//         },
//         {path:'*',
//           element:<Notfound/>
//         }
//       ]
//     },
//     {
//       path:"/stu/:id",
//       element:<Paramcomp/>
//     }
//   ]
// )
function App() {
  // function handleclick (){
  //   alert("clicked")
  // }

  // function handleClick (){
  //   alert("clicked")
  // }

  // function handleonchange (e){
  //   e.preventDefault();
  // alert("clicked", e.taget.value)
  //   console.log(e.target.value)
  // }
  // const[name,setname]=useState(0);

  // function handleClick(){
  //   setcount(count+1);
  // }

  // const[isloggedin,setloggedin]=useState(false)
  // if(isloggedin) return <Logout/>
  // else return  <Login/>

  // return(
  //   isloggedin ? <Logout/>:<Login/>
  // )
  //  if(!isloggedin) return <Login/>
  // return(
  //   isloggedin && <Logout/>
  // )

  // useEffect(()=>{
  //   first
  //   return ()=>{
  //     second
  //   }
  // },[count])
//   const[count,setcount]=useState(0)
//   const handleclick=useCallback(()=>{
//     setcount(count+1);
// },[count]);
         // }
  // useEffect(()=>{
  //   alert("clicked")
  // })

  // useEffect(()=>{
  //   alert("clicked")
  // },[])
  // useEffect(()=>{
  //   alert("clicked")
  // },[count])

  // useEffect(()=>{
  //   alert("clicked")
  // },[count,total])

  // useEffect(()=>{
  //   alert("clicked")
  //   return ()=>{
  //     alert("unclicked")
  //   }
  // },[count])
  // const [user,setuser]=useState({name:"light"});
    // const[name,setname]=useState(0);
    // let val=useRef(0);
    // let btnref=useRef()
    // function handleclick (){
    //   console.log("rerender");
    //   setname(name+1);
    //   val.current+=1;
    //   console.log(val.current);

    // } 
    // function changecolor(){
    //   btnref.current.style.backgroundColor="red"
    // }

  return (
    // <div
    // style={{backgroundColor:user==="light"?"beige":"black"}} >
    //    <Usercontext.Provider value={{user,setuser}}>
    //     <Ca/>
    //    </Usercontext.Provider>
    // </div>

    <div>
      {/* <Notfound name="cilckme"
      handleclick={handleclick} 
      />
      count:{count} */}
      <Memo/>
      {/* <button ref={btnref}onClick={handleclick}>click</button>
      count:{name}
      <button onClick={changecolor}>change color of first btn</button> */}

      {/* <Redux/> */}
      {/* <Submit/> */}
      {/* <Button/> */}
      <About/>
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}

export default App;
// export {Usercontext}


// import { createContext, useRef, useState } from "react"; // Removed unused `useCallback`
// import "./App.css";
// import Memo from "./components/usememo";
// import About from "./components/about";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/home";
// import Paramcomp from "./components/paramcomp";
// import Notfound from "./components/notfound";
// import Timer from "./components/timercompo";

// const UserContext = createContext();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//     children: [
//       {
//         path: "timercompo",
//         element: <Timer />,
//       },
//       {
//         path: "*",
//         element: <Notfound />,
//       },
//     ],
//   },
//   {
//     path: "/stu/:id",
//     element: <Paramcomp />,
//   },
// ]);

// function App() {
//   const [user, setUser] = useState({ name: "light" });
//   const [name, setName] = useState(0);
//   let val = useRef(0);
//   let btnRef = useRef();

//   const handleClick = () => {
//     setName(name + 1);
//     val.current += 1;
//     console.log(val.current);
//   };

//   const changeColor = () => {
//     btnRef.current.style.backgroundColor = "red";
//   };

//   return (
//     <div style={{ backgroundColor: user.name === "light" ? "beige" : "black" }}>
//       <UserContext.Provider value={{ user, setUser }}>
//         <Memo />
//         <button ref={btnRef} onClick={handleClick}>
//           Click
//         </button>
//         <span>Count: {name}</span>
//         <button onClick={changeColor}>Change color of first button</button>
//         <RouterProvider router={router} />
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;
// export { UserContext };
