import React from 'react'
import '../index.css'
function EmptyResult() {
    return (
        <div className="flex-auto flex items-center justify-center">
            <div className="text-base sm:text-3xl">
                Could Not Find The Artist You Looking For
            </div>
        </div>
    )
}

export default EmptyResult
