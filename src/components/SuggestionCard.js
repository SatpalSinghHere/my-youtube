import React from 'react'

const SuggestionCard = ({ data }) => {
    let title = data.snippet.localized.title;
    if (title.length > 50) {
        title = title.slice(0, 50) + '...';
    }
    return (
        <div className='px-2 my-1 flex'>
            <div className='w-1/2 aspect-video rounded-xl overflow-hidden'>
                <img src={data.snippet.thumbnails.medium.url} />
            </div>
            <div className='w-1/2 pl-1 text-xs font-semibold overflow-hidden'>{title}</div>
        </div>
    )
}

export default SuggestionCard
