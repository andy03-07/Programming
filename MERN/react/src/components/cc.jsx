import React,{useContext} from 'react'
import { Usercontext } from '../App'
const cc = () => {
    const {user,setuser}=useContext(Usercontext);
    function handleclick(){
        if(user==="light") 
            setuser('dark')
        else 
        setuser('light')
    }
  return (
    <div>
        <button onClick={handleclick}>change</button>
    </div>
  )
}

export default cc