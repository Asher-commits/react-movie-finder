
function Favorites({ favorites, removeFromFavorites }) {

   return (
      <>
         <h1>Favorites</h1>

         {favorites.length === 0 ? (
            <p>No favorite movies yet</p>
         ) : (
            favorites.map((movie) => (
               <div key={movie.imdbID}>

                  <img
                     src={movie.Poster}
                     alt={movie.Title}
                  />

                  <h3>{movie.Title}</h3>

                  <p>{movie.Year}</p>
                  <button onClick={() => removeFromFavorites(movie.imdbID)}>Remove</button>

               </div>
            ))
         )}
      </>
   )
}

export default Favorites