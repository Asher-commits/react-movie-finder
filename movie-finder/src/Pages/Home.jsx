import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";


function Home(){

const [searchQuery, setSearchQuery] = useState("");

const [movies, setMovies] = useState([]);

const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

const loadPopularMovies = async () => {

    try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies)
    } catch (err){

        console.log(err)
        setError("Failed to load movies...")
    }finally {
        setLoading(false)
    }
}



loadPopularMovies()

}, []);



function searchInput(e){

    setSearchQuery(e.target.value)
}

// const moviesss = [
//     {id: 1, Title: "john-wick", Released: 2020},
//     {id: 2, Title: "Dragon Ball", Released: 1992},
//     {id: 3, Title: "Game of thrones", Released: 2011},
//     {id: 4, Title: "Solo leveling", Released: 2024},
// ]

async function handleSearch(e){
  e.preventDefault();

  if(searchQuery.trim() === ""){
    return;
  }
  if(loading) return;

 setLoading(true); 

 try{
    const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    setError(null);

 }catch (err){
    console.log(err)
    setError("Failed to load movies...")

 }finally{
    setLoading(false)
 }


   setSearchQuery("")

}

    return(
        <>
        <h1>Your movie finder</h1>
        <form onSubmit={handleSearch}>
            <input type="text" value={searchQuery} onChange={searchInput} placeholder="Search for movies..." />
            <button type="submit">Search</button>
        </form> 

        <h2>Trending now</h2>

        {error && <p>{error}</p>}

        {loading ? (
  <p>Loading...</p>
) : (
  movies.map((movie) =>
    movie.Title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
      <MovieCard
        key={movie.imdbID}
        movie={movie}
      />
    )
  )
)}



      
        </>
    )
}

export default Home