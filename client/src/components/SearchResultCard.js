import React, { useEffect, useState } from 'react'
import { VIDEO_DETAILS_API } from '../utils/api'
import { Link } from 'react-router-dom'

const SearchResultCard = ({ videoId }) => {

  const [infoObject, setinfoObject] = useState({})
  const fetchVideoInfo = async () => {
    const data = await fetch(VIDEO_DETAILS_API + videoId);
    const jsonData = await data.json();
    console.log(jsonData);
    setinfoObject(jsonData.items[0].snippet);
  }

  useEffect(() => {
    fetchVideoInfo();
  }, [])

  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="h-[30vh] w-full m-2 p-2 shadow-lg hover:bg-slate-200 rounded-lg flex cursor-pointer">
        <div className='h-full p-0 aspect-video bg-slate-400 rounded-md'>
          <img className='h-full' src={infoObject.thumbnails?.medium.url} alt="banner" />
        </div>
        <div className='flex flex-col p-2'>
          <div className='px-1 w-full text-lg'>
            <h1>{infoObject.title}</h1>
          </div>
          <p>{infoObject.channelTitle}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchResultCard
