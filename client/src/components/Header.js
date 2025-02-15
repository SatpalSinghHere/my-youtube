import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const [search, setSearch] = useState('');
    const [queries, setQueries] = useState([]);
    const [displaySuggestions, setDisplaySuggestions] = useState(false)
    const searchRef = useRef(null)

    const fetchQueries = async (query) => {
        console.log('fetching')
        const res = await fetch("https://satpals-youtube-search-api.onrender.com/" + query)

        return new Promise((resolve, reject) => {
            // Define the global callback function
            window.google = window.google || {};
            window.google.ac = window.google.ac || {};

            // Define the function that will be called by the JSONP script
            window.google.ac.h = (responseData) => {
                resolve(responseData); // Resolve the Promise with the data
            };

            // Create a new script tag to load the data
            const script = document.createElement('script');
            script.src = "https://satpals-youtube-search-api.onrender.com/" + query; // Replace with the actual URL
            script.onerror = reject; // Handle errors

            // Append the script to the body
            document.body.appendChild(script);
        });
    };

    const navigate=useNavigate();
    function Search(query) {
        console.log(query);
        
        if(query !== '') navigate(`/searchresults/${query}`);
    }


    // console.log(res.json());

    useEffect(()=>{
        if(search === '' && queries.length > 0){
            setQueries([])
        }
    },[queries])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                console.log('removing suggestions')
                setDisplaySuggestions(false);  // Hide suggestions when clicking outside
            }
        };

        // Add event listener for clicks on the document
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    useEffect(() => {
        fetchQueries(search)
            .then((responseData) => {
                console.log(responseData[1]); // Handle the data
                setQueries(responseData[1]); // Set the data in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [search])



    return (
        <div className='grid grid-flow-col p-2 shadow-lg fixed bg-white w-full z-20'>
            <div className='flex col-span-1'>
                <div className='h-6 w-6 hover:cursor-pointer' onClick={() => { handleToggleMenu() }}>
                    <img alt="hamburger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEX///8AAADy8vKioqL5+fkrKyt0dHTQ0NDT09M2Nja5ubnr6+upqamVlZVSUlLc3Nzi4uLExMRfX19FRUVsbGw+Pj5lZWWNjY2CgoJ6enoLCwsXFxdPKYE2AAACRklEQVR4nO3dC46jMAyAYRa6hVLenc6Uzv3vuaBqZh9STCyt5MT6vxPYSiAhGFMUAAAAAAAAAAAAuTqVSTspUrk2/XL5mazL0jfX2FTa24/k3dqodOo360DjvNXHucwX6yhjXWY/uRxnMy3WEWosk5hMZR2fTiXl0tytw9O5N0IyrXV0Wm04l+vZOjitc3i1GTObZds8G8OXjHVseuGLprYOTS+8DXCVTPNpHZvWZ3iaTYN1cFpDeA9QflgHp9WXwWRcLZrF9G4dnc67uNPMbGikgSmKU1ZXzcfBwcaU0fbsLD/O7Nk8rGOM9TjMZbs/d1lsN++dcFf+Q10lv3gOVcTZzMtpqtuuSlbX1pPmTHNLKGGqRAAAAAAAAID/J+m6RtXBWTnO/XpO1trPY9xB8zYo8/q0Pks+8lznqOEZe+tI4/ThSpNvdTblc8vhi4Am+bcZvw1StdnmulpHqLHK5cCddXw6nZTLmNEk2w3STSCzMgCxEKDM5k3zl0d48Zwy+Ajgb7fw6/Mm+ZX/X0/KGlMllDV6mmaubgCubs2uFk1f2xlXG01fjwCuHs58PTb7OtDwddRUuDoEfA2P9RGshLpGAAAAAAAAWLH+5FeiS8TRh9qOPqH31NzAU9sJTw1BXLVqyawQQGyi46q9UWYDI5c1ZnXF7ISWYK6atblqo+eqEtBVMq6agrpq1+qqka6rRdNX82lXbcGLMZvSud1yUHLmqZV+Ttkc5+Lr9xO+fgxSuPplyy7pqkbqGgEAAAAAAAAAQM5+AbaoXAOXviXAAAAAAElFTkSuQmCC" />
                </div>
                <a href="/">
                    <div className='h-6 w-24 px-2 py-1'>
                        <img alt="yt-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" />
                    </div>
                </a>
            </div>
            <div className='flex justify-center col-span-10'>
                <div className='flex flex-col'>
                    <input ref={searchRef} value={search} onFocus={()=>{console.log('displaying suggestions'); setDisplaySuggestions(true)}} onChange={(e) => { setSearch(e.target.value) }} className='w-96 h-6 border border-gray-400 rounded-l-full px-2' type="text" placeholder="Search" />
                    <div className='absolute top-8 flex flex-col cursor-pointer'>
                        {displaySuggestions && queries.map((item) => <div  onClick={() => {navigate(`/searchresults/${item[0]}`)}} className='w-96 h-6 pl-2 bg-white border-black hover:bg-slate-300 shadow-lg'> {item[0]}</div>)}
                    </div>
                </div>
                <button className='h-6 w-8 border border-gray-400 rounded-r-full px-2' onClick={()=>{Search(search)}}>
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
