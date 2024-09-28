import React, { useEffect, useState } from 'react'
import { CHANNEL_LOGO_API } from '../utils/api';
import { Link } from 'react-router-dom';

const VideoCard = ({ data, channelId }) => {

  const [channelBannerSrc, setChannelBannerSrc] = useState('')

  const fetchChannelBanner = () => {
    fetch(CHANNEL_LOGO_API + channelId)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const obj = data.items[0].brandingSettings?.image
        if(obj !== undefined){
          setChannelBannerSrc(obj.bannerExternalUrl)
        }
        
      })
  }

  useEffect(()=>{
    fetchChannelBanner();
  },[])

  let title = data.snippet.localized.title;
  if (title.length > 65) {
    title = title.slice(0, 65) + '...';
  }

  let channelTitle = data.snippet.channelTitle;
  if (channelTitle.length > 20) {
    channelTitle = channelTitle.slice(0, 18) + '...';
  }

  return (


    <div className='m-2 p-2 w-[22%] hover:bg-slate-300 rounded-2xl shadow-lg aspect-video'>
      <Link to={"/watch?v=" + data.id}>
        <div className='relative w-full overflow-hidden flex items-center rounded-lg'>
          <img className='w-full h-full' alt="thumbnail" src={data.snippet.thumbnails.medium.url} />
        </div>


        <div className='text-xs font-semibold'>{title}</div>
        <hr />
        <div className='text-xs flex h-2/5 items-center'>
          <img className='h-8 w-8 rounded-full' src={channelBannerSrc} alt="LOGO" />
          {channelTitle}
        </div>


      </Link>
    </div>
  )
}

export default VideoCard
