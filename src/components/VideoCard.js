import React, { useEffect, useState } from 'react'
import { CHANNEL_LOGO_API } from '../utils/api';
import { Link } from 'react-router-dom';

const VideoCard = ({ data, channelId }) => {

  // const [imageData, setImageData] = useState({});
  // const [imageURL, setImageURL] = useState('');

  // // console.log(channelId);

  // const fetchChannel = async () => {
  //   const apiData = await fetch(CHANNEL_LOGO_API + channelId);
  //   const jsonData = await apiData.json();
  //   setImageData(jsonData);

  // }

  // useEffect(
  //   () => {
  //     fetchChannel();
  //   }, []
  // )

  // useEffect(
  //   () => {
  //     console.log(imageData);
  //     if(imageData.items) {
  //       setImageURL(imageData.items[0].brandingSettings.image.bannerExternalUrl);
  //       console.log(imageURL);
  //     }
  //   }, [imageData]
  // )
  let title = data.snippet.localized.title;
  if(title.length > 65) {
    title = title.slice(0, 65) + '...';
  }

  let channelTitle = data.snippet.channelTitle;
  if(channelTitle.length > 13) {
    channelTitle = channelTitle.slice(0, 13) + '...';
  }

  return (

    
    <div className='m-2 p-2 w-[22%] hover:bg-slate-300 rounded-2xl shadow-lg aspect-video'>
      <Link to={"/watch?v="+ data.id}>
      <div className='relative w-full overflow-hidden flex items-center rounded-lg'>
        <img className='w-full h-full' alt="thumbnail" src={data.snippet.thumbnails.medium.url} />
      </div>
      <div className=''>
        
        <div className='text-xs font-semibold'>{title}</div>
        <hr/>
        <div className='text-xs'>{channelTitle}</div>
      </div>

    </Link>
    </div>
  )
}

export default VideoCard
