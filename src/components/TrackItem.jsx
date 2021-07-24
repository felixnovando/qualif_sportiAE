import React from 'react'
import '../index.css'

function TrackItem({track}) {
    return (
        <div className="bg-gray-400 flex flex-col justify-center items-center p-3">
            <div className="text-lg sm:text-3xl text-white mb-2">{track.name}</div>
            <audio src={track.preview_url} controls className="sm:w-5/6"/>
        </div>
    )
}

export default TrackItem
