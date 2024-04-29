import React, { useEffect, useState } from 'react'
import {VIDEO_LIST_API}  from '../utils/api'
import data from '../utils/data.json'
import VideoCard from './VideoCard'

const VideoContainer = () => {

  const [videoList, setVideoList] = useState([]);
  
  const fetchAPI = async () => {
    const data = await fetch(VIDEO_LIST_API+"20");
    const jsonData = await data.json();
    // console.log(jsonData);
    setVideoList(jsonData.items);
  }

  useEffect(
    () => {
      fetchAPI();
    }, []
  )

  return (
    <div className='flex flex-wrap'>
      {
        videoList.map((item, index) => {
          return <VideoCard data={item} key={index} channelId={item.snippet.channelId} />
        })
      }
      
    </div>
  )
}

export default VideoContainer
