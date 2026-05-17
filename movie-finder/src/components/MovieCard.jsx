
function MovieCard({ movie }){

function onFavoriteClick(){
    alert("clicked")
}

    return(
        <>
        <img src={movie.Poster} alt={movie.Title}/>
        <button onClick={onFavoriteClick}>🧡</button>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        
        </>
    )
}

export default MovieCard