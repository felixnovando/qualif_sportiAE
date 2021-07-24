import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

function SearchBar({changeSearchBar}) {
    return (
        <div className="h-1/6 flex bg-blue-200 items-center justify-evenly">
            <input type="text" name="" id="" onChange={changeSearchBar} className="w-3/5 border-2 sm:h-3/5 sm:w-4/5" placeholder="Seach Artist"/>
            <Link to="/favorites" className="ml-2 p-2 bg-green-500">
                Favourites
            </Link>
        </div>
    )
}

export default SearchBar
