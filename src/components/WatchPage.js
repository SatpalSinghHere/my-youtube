import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom';
import { VIDEO_DETAILS_API, VIDEO_LIST_API } from '../utils/api';
import Description from './Description';
import SuggestionCard from './SuggestionCard';

const WatchPage = () => {
    const dispatch = useDispatch();

    let [params] = useSearchParams();
    const videoId = params.get('v');

    const [videoDetails, setVideoDetails] = useState({});
    const [videoList, setVideoList] = useState([]);

    const fetchVideoList = async () => {
        const data = await fetch(VIDEO_LIST_API+"10");
        const jsonData = await data.json();
        // console.log(jsonData);
        setVideoList(jsonData.items);
    }

    const fetchVideoDetails = async () => {
        const data = await fetch(VIDEO_DETAILS_API + videoId);
        const jsonData = await data.json();
        // console.log(jsonData);
        setVideoDetails(jsonData.items[0]);
        let desc = jsonData.items[0].snippet.description;

        // console.log(desc);
        // arrangeDescription(desc);

    }
    useEffect(() => {
        dispatch(closeMenu());
        fetchVideoList();
        fetchVideoDetails();
    }, [])



    return (
        <div className='pl-3 pt-10 flex justify-center w-screen'>
            <div className='w-[60vw] min-w-[500px]'>
                <div className='w-full aspect-video'>
                    <iframe className='w-full aspect-video rounded-2xl' src={"https://www.youtube.com/embed/" + videoId + "?si=lTrr_VnWPpLwU46M&autoplay=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='text-lg'>{videoDetails.snippet?.title}</div>


                <div className="flex justify-between">
                    <div className='flex items-center'>
                        <div className='bg-slate-400 rounded-full size-8'>
                            <img src="" alt="" />
                        </div>
                        <div className='ml-1'>
                            <div className='text-[0.75rem]'>Channel Name</div>
                            <div className='text-[0.6rem]'>0 Subscribers</div>
                        </div>
                        <button className='shadow-md rounded-full px-2 text-[0.75rem] ml-2 h-[80%] text-justify hover:bg-slate-200'>Subscribe</button>
                    </div>
                    <div className='flex items-center'>
                        <div className='h-full flex items-center'>
                            <button className='shadow-md rounded-l-full px-2 text-[0.75rem] ml-2 h-[80%] text-justify hover:bg-slate-200'>0 Like</button>
                            <button className='shadow-md rounded-r-full px-2 text-[0.75rem] h-[80%] text-justify hover:bg-slate-200'> Dislike</button>
                        </div>
                        <button className='shadow-md rounded-full px-2 text-[0.75rem] ml-2 h-[80%] text-justify hover:bg-slate-200'>Share</button>
                        <button className='shadow-md rounded-full px-2 text-[0.75rem] ml-2 h-[80%] text-justify hover:bg-slate-200'>Download</button>
                        <button className='shadow-md rounded-full px-2 text-[0.75rem] ml-2 h-[80%] text-justify hover:bg-slate-200'>Clip</button>
                    </div>
                </div>
                <Description description={videoDetails.snippet?.description} />

            </div>
            <div className='w-[25vw] h-full bg-slate-200 ml-3 rounded-2xl'>
                {
                    videoList.map((item, index) => {
                        return <SuggestionCard data={item} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default WatchPage
