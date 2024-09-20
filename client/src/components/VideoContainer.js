import React, { useEffect, useState } from 'react'
import { VIDEO_LIST_API } from '../utils/api'
import data from '../utils/data.json'
import VideoCard from './VideoCard'
import ShimmerVideoCard from './shimmerElements/ShimmerVideoCard'

const VideoContainer = () => {

  const [videoList, setVideoList] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState([false]);

  const fetchAPI = async () => {
    const data = await fetch(VIDEO_LIST_API + "20");
    const jsonData = await data.json();
    setIsDataFetched(true);
    setVideoList(jsonData.items);
  }

  useEffect(
    () => {
      fetchAPI();
    }, []
  )
  if (isDataFetched !== true) {

    return (
      <div className='flex flex-wrap'>
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
        <ShimmerVideoCard />
      </div>
    )
  }
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
