import React, { useEffect, useState } from 'react';
import { SEARCH_API } from '../utils/api';
import { useParams } from 'react-router-dom';
import ShimmerSearchResultCard from './shimmerElements/ShimmerSearchResultCard';
import SearchResultCard from './SearchResultCard';

const SearchResultsContainer = () => {
    const [videoIdList, setVideoIdList] = useState([]);

    const params = useParams();

    const fetchResults = async (query) => {
        console.log("fetching search results")
        setVideoIdList([])
        const data = await fetch(SEARCH_API + "q=" + query + "&maxResults=10");
        const jsonData = await data.json();
        const videoIds = jsonData.items.map((item) => item.id.videoId);
        setVideoIdList(videoIds);
    };

    useEffect(() => {
        if (params.query) {
            fetchResults(params.query);
        }
    }, [params.query]);

    if (videoIdList.length === 0) {
        return (
            <div className='pt-10 w-full h-min-[80vh]'>
                <ShimmerSearchResultCard />
                <ShimmerSearchResultCard />
                <ShimmerSearchResultCard />
                <ShimmerSearchResultCard />
            </div>
        );
    }

    return (
        <div className='pt-10 w-full h-min-[80vh]'>
            {videoIdList.map((videoId, index) => (
                <SearchResultCard key={index} videoId={videoId} />
            ))}
            {/* <SearchResultCard videoId={{name:"Satpal"}}/>
            <SearchResultCard videoId={{name:"Satpal"}}/>
            <SearchResultCard videoId={{name:"Satpal"}}/>
            <SearchResultCard videoId={{name:"Satpal"}}/> */}
            
        </div>
    );
};

export default SearchResultsContainer;
