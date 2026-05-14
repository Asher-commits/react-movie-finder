import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"
import { useState } from "react"

function App() {
 

  const [movies, setMovies] = useState([])

  return (
    <>
    <h1>Your movie finder</h1>
    <SearchBar setMovies={setMovies}/>
    <MovieList movies={movies}/>

    </>
  )
}

export default App
