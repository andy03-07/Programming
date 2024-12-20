import React,{useState,useEffect} from 'react'

// const login = () => {
//   return (
//    <button>login</button>
// )
// }

// export default login

function Datafetcher(){
  const[data,setdata]=useState([]);
  const[loading,setloading]=useState(true);

useEffect(()=>{
  fetch('https://jsonlaceholder.typicode.com/posts').then(response=>response.json())
   .then(data=>{
    setdata(data);
    setloading(false);
   });
},[])

return (
  <div>
    {loading ? (
     <h1>loading</h1>
     ) :(
      <ul>
       {data.map(post=>(
        <li key={post.id}>{post.title}</li>
       ))}
      </ul>
     )}
  </div>
);
}

export default Datafetcher;