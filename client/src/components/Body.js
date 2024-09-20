import React, { Suspense } from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Loader from './shimmerElements/Loader'

const Body = () => {
  return (
    <Suspense  fallback={<Loader/>}>


    <div className='flex-col'>
      <Header />
      <div className='flex w-full'>
        <SideBar />
        <Outlet />
      </div>
    </div>
    </Suspense>
  )
}

export default Body
