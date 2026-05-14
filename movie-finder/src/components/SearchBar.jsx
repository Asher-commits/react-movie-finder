import { useState } from "react"
import axios from "axios";
 


function SearchBar({ setMovies }){

    const [search, setSearch] = useState("");

    function handleSearchInput(e){
        setSearch(e.target.value);
        
    }

    function getMovies(){

        if(search === ""){
            return
        }

        const api = `https://www.omdbapi.com/?s=${search}&apikey=f972b399`

        axios.get(api)
        .then((response) => {
            console.log(response.data);
            setMovies(response.data.Search);

        })
        .catch((error) => {
            console.log(error)
        })

    }


    return(
        <>
        <input value={search} onChange={handleSearchInput} placeholder="Eg. Batman"/>
        <button onClick={getMovies}>Search</button>
        </>
    )
}

export default SearchBar