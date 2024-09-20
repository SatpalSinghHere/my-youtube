import React from 'react'
import { Link } from 'react-router-dom';

const SuggestionCard = ({ data }) => {
    console.log(data)
    let title = data.snippet.localized.title;
    if (title.length > 50) {
        title = title.slice(0, 50) + '...';
    }
    return (
        <Link to={"/watch?v=" + data.id}>
            <div className='px-2 my-1 flex bg-white shadow-lg hover:bg-slate-100 rounded-lg'>
                <div className='w-1/2 aspect-video rounded-xl overflow-hidden'>
                    <img src={data.snippet.thumbnails.medium.url} />
                </div>
                <div className='w-1/2 pl-1 text-xs font-semibold overflow-hidden'>{title}</div>
            </div>
        </Link>
    )
}

export default SuggestionCard
