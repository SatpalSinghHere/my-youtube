import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';
import { autocomplete } from '../utils/autocomplete';

const Header = () => {
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const [search, setSearch] = useState('');
    // const [queries, setQueries] = useState([]);
    // const fetchQueries = async (query) => {
    //     const res = await autocomplete(query);
    //     console.log(res.json());
    //     setQueries(res.json());
    // }
     


    return (
        <div className='grid grid-flow-col p-2 shadow-lg fixed bg-white w-full z-20'>
            <div className='flex col-span-1'>
                <div className='h-6 w-6 hover:cursor-pointer' onClick={() => { handleToggleMenu() }}>
                    <img alt="hamburger" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" />
                </div>
                <a href="/">
                    <div className='h-6 w-24 px-2 py-1'>
                        <img alt="yt-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" />
                    </div>
                </a>
            </div>
            <div className='flex justify-center col-span-10'>
                <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className='w-96 h-6 border border-gray-400 rounded-l-full px-2' type="text" placeholder="Search" />
                <button className='h-6 w-8 border border-gray-400 rounded-r-full px-2'>
                    <img alt="search" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png" />
                </button>
            </div>
            <div className='col-span-1'>
                <div className='size-6'>
                    <img alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
                </div>

            </div>

        </div>
    )
}

export default Header
