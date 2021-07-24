import '../index.css'
import AlbumItem from '../components/AlbumItem'
import {Link} from 'react-router-dom'

function FavoritePage() {

    const favourites = JSON.parse(localStorage.getItem('favorites'))
    
    console.log(favourites)

    if(favourites==null){
        return(
            <div className="w-screen h-screen flex flex-col justify-center items-center">
                <p className="text-5xl">Page is Empty</p>
                <Link to="/" className="mt-3 m-2 p-2 text-2xl">Back</Link>
            </div>
        )
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="h-1/6 flex flex-col items-center justify-center">
                <p className="text-4xl">Favorites Album</p>
                <Link to="/" className="bg-red-500 text-base sm:text-3xl rounded-xl m-2 p-2">Back</Link>
            </div>
            <div className="overflow-y-auto">
                <div className="grid grid-flow-row grid-cols-3 gap-3">
                    {favourites?.map(item =>{
                        return (
                            <AlbumItem album={item} artistName=""
                            key={item.id}>
                            </AlbumItem>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FavoritePage
