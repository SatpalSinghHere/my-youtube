import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isMenuOpen = useSelector(
    (store) => store.app.isMenuOpen
  )

  if(!isMenuOpen) return null

  return (
    <div className='text-sm shadow-lg p-2 w-1/6 min-w-28 min-h-screen pt-10 z-10'>
      <ul className='list-none'>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subcriptions</li>
        <hr></hr>
        <li>You &gt;</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <hr></hr>
        <li>Settings</li>
        <li>Report History</li>
      </ul>
    </div>
  )
}

export default SideBar
