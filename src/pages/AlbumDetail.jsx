import {React, useState} from 'react'
import { useParams } from 'react-router-dom'
import {gql, useQuery} from '@apollo/client'
import '../index.css'
import TrackItem from '../components/TrackItem';
import {Link} from 'react-router-dom'

function AlbumDetail() {

    const [isFavorite, setIsFavorite] = useState(false);
    const [first, setFirst] = useState(false);
    const { id } = useParams();

    const ALBUM_QUERY = gql`
        query GetAlbum($id : String!){
            album(id : $id){
                id
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
            
        }
    `

    const {loading, error, data} = useQuery(ALBUM_QUERY, {
        variables : {
            id : id
        }
    })

   if(loading)
        return(
        <div className="w-screen h-screen flex justify-center items-center">
            <p className="text-5xl">Loading...</p>
        </div>
    )

    const album = data ? data.album : null
    const tracks = album ? album.tracks : null

    if(album == null || tracks == null){
        return(
            <div className="w-screen h-screen flex justify-center items-center">
                <p className="text-5xl">404</p>
            </div>
        )
    }

    // console.log(JSON.parse(localStorage.getItem('favorites')))

    // cek uda di favorit / blom

    console.log(JSON.parse(localStorage.getItem('favorites')))

    const check = () =>{
        if(album){
            let favorites = JSON.parse(localStorage.getItem('favorites'))
            let itemz = {id : album.id, name : album.name, image : album.image}
            let found = false
            if(favorites){
                favorites.forEach((fav)=>{
                    if(fav.id === itemz.id){
                        found = true
                    }
                })
            }
            if(found===true){
                setIsFavorite(true);
            }
        }
    }
    if(first === false){
        check()
        setFirst(true)
    }
  
    const addToFavorites = () =>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let itemz = {id : album.id, name : album.name, image : album.image}
        console.log(favorites)
        if(favorites == null){
            favorites = [itemz]
        }
        else{
            favorites.push(itemz)
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setIsFavorite(true)
    }

    const removeFromFavorites = ()=>{
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        let itemz = {id : album.id, name : album.name, image : album.image}
        if(favorites == null){
            favorites = []
        }
        else{
            let i = 0
            let found = false
            favorites.forEach((fav)=>{
                if(fav.id === itemz.id){
                    found = true
                }
                else{
                    if(found===false){
                        i += 1
                    }
                }  
            })
            favorites.splice(i, 1)
        }
        console.log(favorites)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        setIsFavorite(false)
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/3">
                <img src={album.image} alt="" />
                <h3 className="text-base sm:text-3xl text-center mb-2">{album.name}</h3>
                <div className="flex justify-center">
                    {isFavorite === true ? (
                        <button onClick={removeFromFavorites}
                            className="bg-red-500 rounded-xl text-base sm:text-2xl p-2"
                        >Remove From Favorites</button>
                    ) : (
                        <button onClick={addToFavorites}
                            className="bg-green-500 rounded-xl text-base sm:text-2xl p-2"
                        >Add To Favorites</button>
                    )}
                </div>
                <div className="mt-2 flex justify-center">
                    <Link to="/" className="bg-red-500 text-base sm:text-xl rounded-xl m-2 p-2">Back</Link>
                </div>
                
            </div>
            <div className="flex-auto ml-3 overflow-y-scroll">
                {tracks?.map(track =>{
                    return (
                        <TrackItem track={track} key={track.id} />
                    )
                })}
            </div>   
        </div>
    )
}

export default AlbumDetail
