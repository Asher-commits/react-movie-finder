
function MovieCard({ movie }){

    return(
        <>
        <img src={movie.Poster} alt={movie.Title}/>
        <h3>{movie.Title}</h3>
        <p>{movie.Released}</p>
        
        </>
    )
}

export default MovieCard