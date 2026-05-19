
function MovieCard({ movie, addToFavorites }) {

    function onFavoriteClick() {
        addToFavorites(movie);
    }

    return (
        <div className="movie-card">

            <img src={movie.Poster} alt={movie.Title} />

            <button
                className="favorite-btn"
                onClick={onFavoriteClick}
            >
                🧡 
            </button>

            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>

        </div>
    )
}

export default MovieCard;