import React from 'react'
import {useForm} from "react-hook-form"
import "../styles/submit.css"
const submit = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm();
    const onSubmit=async (data)=> {
        await new Promise((resolve) => { 
          setTimeout(resolve,5000);
        });
          console.log(data);
          
        };
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div>
      <label >name</label>
      <input className={errors.name ? "input":""} {...register('name',{required: true,maxLength:{value:7,message:"enough"},minLength:{value:4,message:"min l should be 4"}})}/>
      {errors.name && <p className='error'>{errors.name.message}</p>}
      </div>
      <label>name</label>
      <input className={errors.name ? "input":""} {...register('lastname',{pattern:{
        value:/^[a-z A-Z]+$/,message:"lastname not valid"}})}/>
        {errors.lastname && <p className='error'>{errors.lastname.message}</p>}
      <input {...register('nam')}></input>
      <input {...register('na')}></input>
      <input type='submit' disabled={isSubmitting} value={isSubmitting? "submitting":"submit"}/>
    </form>
    </div>
  )
}

export default submit