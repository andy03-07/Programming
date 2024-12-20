import React, { useRef, useState } from 'react'

const stopwatch = () => {
    const [time,settime]=useState(0)
    let timer=useRef(null)
    function handlestart(){
     timer.current=setInterval(()=>{
        settime+=1;
     },1000)
    }

    function handlestop(){
        clearInterval(timer.current);
        timer.current=null;
    }

    function handlereset(){
        stoptimer();
        settime(0)
    }
  return (
    <div>
        <h1>stopwatch:{time} sec</h1>
        <button onClick={handlestart}>start</button>
      <button onClick={handlestop}>stop</button>
      <button onClick={handlereset}>reset</button>

    </div>
  )
}

export default stopwatch