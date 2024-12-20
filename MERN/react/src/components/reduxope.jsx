import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from '../features/counter/counterslice';

const reduxope = () => {
    const [amount,setamount]=useState(0)
    const count =useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    function handleIncrementClick (){
        dispatch(increment());
    }

    function handleDecrementClick (){
        dispatch(decrement());

    }
    
    function handleResetClick (){
        dispatch(reset());

    }
    function handleIncamt (){
        dispatch(incrementByAmount(amount));

    }

  return (
    <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleResetClick}>Reset</button>
        <input type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e)=> setamount(e.target.value)}/>
        <button onClick={handleIncamt}>Inc By Amt</button>



    </div>
  )
}

export default reduxope