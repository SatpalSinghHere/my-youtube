import React, { useState } from 'react'

const Description = ({ description }) => {

    const [isDescShort, setIsDescShort] = useState(true);

    const handleToggleDescription = () => {
        setIsDescShort(!isDescShort);
    }

    return (
        <div onClick={handleToggleDescription} className='w-full text-[0.75rem] bg-slate-200 rounded-2xl px-3 mt-2 hover:bg-slate-100 hover:cursor-pointer'>
            {
                isDescShort ?
                    description != undefined && description.split('\n').map((item, index) => {
                        if (index < 4) return <p key={index}>{item}</p>
                        if (index === 4) return <p key={index}>{item}...</p>
                        return null
                    })
                    :
                    description != undefined && description.split('\n').map((item, index) => {
                        return <p key={index}>{item}</p>
                    })


            }
        </div>


    )
}

export default Description

