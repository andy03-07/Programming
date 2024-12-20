import React from 'react'
import {useParams} from "react-router-dom"

const paramcomp = () => {
    const {id}=useParams();
  return (
    <div>paramcomp:{id}</div>
  )
}

export default paramcomp