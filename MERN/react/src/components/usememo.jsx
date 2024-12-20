import React, { useState ,useMemo, useCallback, useEffect,useRef} from 'react'

// const usememo = () => {
//     const [count,setcount]=useState(0);
//     const [input,setinput]=useState(0);

//     function expense(num){
//         console.log("inside function");
//         for(let i=0;i<10000000000;i++){
//             return num*2;
//         }

        
        
//     }
//     let double=useMemo(()=> expense(input),[input]);
    
//   return (
//     <div>
//         <button onClick={()=> setcount(count+1)}>incre</button>
//         count:{count};

//         <input type="number" onChange={(e)=>(setinput(e.target.value))} />
//         double:{double};
//     </div>
//   )
// }

// export default usememo

const usememo = () => {
  const [count,setcount]=useState(0);
  const [input,setinput]=useState(0);
  const previousfunction=useRef(null);

  const expense=useCallback(()=>{
    console.log("inside function");
    let result=0;

    for(let i=0;i<10000000000;i++){
        result+=1;
    }
   return result;
    
    
},[count]);

useEffect(()=>{
  if(previousfunction.current){
  if(previousfunction.current===expense){
  console.log("not recreated");
  }
  else console.log("recreated")
}
else previousfunction.current=expense;
},[expense])


return (
      <div>
          <button onClick={()=> setcount(count+1)}>incre</button>
          count:{count};
  
          <input type="number" onChange={(e)=>(setinput(e.target.value))} />
          {/* double:{double}; */}
      </div>
    )
  }


export default usememo;