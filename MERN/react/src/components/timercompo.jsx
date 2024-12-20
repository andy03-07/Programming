import React, { useEffect, useState } from 'react'

export default function timercompo() {
    const[sec,setsec]=useState(0);
    useEffect(()=>{
    const intervalid=setInterval(()=>{
        setsec(prevsec=>prevsec+1);
},1000)
     return ()=>{
        clearInterval(intervalid);
     };
    },[])
  return (
    <div>
      <h1>sec</h1>
    </div>
  )
}
