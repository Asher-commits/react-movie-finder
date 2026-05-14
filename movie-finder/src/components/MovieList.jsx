import MovieCard from "./MovieCard";



function MovieList({ movies }){

    return(
        <>
        {movies.map((movie, index) => (
            <MovieCard key={index} props={movie} />
        ))}     
        </>
    )
}

export default MovieList