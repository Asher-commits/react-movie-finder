import Favorites from "./Pages/Favorites"
import Home from "./Pages/Home"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"


function App() {

  const [favorites, setFavorites] = useState([])

  function addToFavorites(movie) {

    const aleadyFavorite = favorites.some((favMovie) => favMovie.imdbID === movie.imdbID)

    if (!aleadyFavorite) {
      setFavorites([...favorites, movie])
    }

  }


  function removeFromFavorites(movieId) {

    const updateFavorites = favorites.filter((movie) => movie.imdbID !== movieId)

    setFavorites(updateFavorites)
  }

  return (
    <>
      <NavBar />

      <Routes>

        <Route path="/" element={<Home
          addToFavorites={addToFavorites}
        />} />
        <Route path="/favorites" element={<Favorites favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />} />
      </Routes>
    </>
  )
}

export default App
