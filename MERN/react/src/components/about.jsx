import React from 'react'
import { Outlet } from 'react-router-dom'

const about = () => {
  return (
    <div>about
        <a href='/timercompo'>timer</a>
        <Outlet/>
    </div>
  )
}

export default about