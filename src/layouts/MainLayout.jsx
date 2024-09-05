import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../../comps/Navbar'

const MainLayout = () => {
  return (
<>
<Navbar />
<Outlet />
</>
  )
}

export default MainLayout
