import React from 'react'
import '../index.css'

function TrackItem({track}) {
    return (
        <div className="bg-gray-400">
            <div className="">{track.name}</div>
            <audio src={track.preview_url} controls className=""/>
        </div>
    )
}

export default TrackItem
