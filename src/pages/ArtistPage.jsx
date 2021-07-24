import AlbumItem from '../components/AlbumItem'
import Loading from '../components/Loading'
import '../index.css'
import React, { useState, useEffect } from 'react'
import {gql, useQuery} from '@apollo/client'
import SearchBar from '../components/SearchBar'
import EmptyResult from '../components/EmptyResult'

function AbumPage() {

    const [searchText, setSearchText] = useState("")
    
    const changeSearchBar = (e) =>{
        setSearchText(e.target.value);
    }
    // Adhitia Softyan

    let artistName = searchText;
    let ARTIST_QUERY = null;

    ARTIST_QUERY = gql`
        query GetAtrist($n : String!){
            artist(name: $n){
                name
                albums{
                    id
                    name
                    image
                }
            }
        }
    `

    let {loading, error, data} = useQuery(ARTIST_QUERY, {
        variables : {
            n : artistName
        }
    })

    let artist_name = data ? data.artist.name : null
    let list_albums = data ? data.artist.albums : null;

    console.log(list_albums)

    return (
        <div className="h-screen flex flex-col">
            <SearchBar changeSearchBar={changeSearchBar}/>

            {loading ? (
                // loading
                <Loading/>
            ) : null}

            {!loading ? 
                (list_albums != null ? (
                // albumnya
                <div className="overflow-y-auto listAlbum">
                    <div className="grid grid-flow-row grid-cols-3 gap-3">
                        {list_albums?.map(album =>{
                            return(
                                <AlbumItem album={album} artistName={artist_name} key={album.id}/>
                            )
                        })}
                    </div>
                </div>
            ) : (
                // kalau kosong
                <EmptyResult />
            ) ): null}
        </div> 
    )
}


export default AbumPage
