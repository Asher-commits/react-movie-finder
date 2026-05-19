
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import { getPopularMovies, searchMovies } from "../services/api"

function Home({ addToFavorites }) {

  const [searchQuery, setSearchQuery] = useState("")
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const loadPopularMovies = async () => {

      try {
        setLoading(true)

        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)

        setError(null)

      } catch (err) {
        console.log(err)
        setError("Failed to load movies...")

      } finally {
        setLoading(false)
      }
    }

    loadPopularMovies()

  }, [])


  function searchInput(e) {
    setSearchQuery(e.target.value)
  }


  async function handleSearch(e) {
    e.preventDefault()

    if (searchQuery.trim() === "") return
    if (loading) return

    try {
      setLoading(true)

      const searchResults = await searchMovies(searchQuery)

      setMovies(searchResults)
      setError(null)

    } catch (err) {
      console.log(err)
      setError("Failed to load movies...")

    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <h1>Your movie finder</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={searchInput}
          placeholder="Search for movies..."
        />

        <button type="submit">Search</button>
      </form>

      <h2>Trending now</h2>

      {error && <p>{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movies-grid">

          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                addToFavorites={addToFavorites}
              />
            ))
          ) : (
            <p>No movies found</p>
          )}

        </div>
      )}
    </>
  )
}

export default Home