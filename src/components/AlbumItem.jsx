import React from 'react'
import '../index.css'
import {Link} from 'react-router-dom'

function AlbumItem({album, artistName}) {
    return (
        <Link to={`/album/${album.id}`} className="border-2">
            <img src={album.image} alt="" className="w-full"/>
            <div className="flex flex-col items-center w-full">
                <h3 className="text-base sm:text-3xl">{album.name}</h3>
                <p className="text-base  sm:text-2xl">{artistName}</p>
            </div>
        </Link>
    )
}

export default AlbumItem
