import { useState } from "react"
import MovieCard from "../components/MovieCard";


function Home(){

const [searchQuery, setSearchQuery] = useState("");

function searchInput(e){

    setSearchQuery(e.target.value)
}

const moviesss = [
    {id: 1, Title: "john-wick", Released: 2020},
    {id: 2, Title: "Dragon Ball", Released: 1992},
    {id: 3, Title: "Game of thrones", Released: 2011},
    {id: 4, Title: "Solo leveling", Released: 2024},
]

function handle(){
   alert(searchQuery) 
}

    return(
        <>
        <h1>Your movie finder</h1>
        <form onSubmit={handle}>
            <input type="text" value={searchQuery} onChange={searchInput} placeholder="Search for movies..." />
            <button type="submit">Search</button>
        </form> 

        <h2>Trending now</h2>
        {moviesss.map(movie => 
           movie.Title.toLowerCase().startsWith(searchQuery) && <MovieCard key={movie.id} movie={movie}/>
        )}



      
        </>
    )
}

export default Home