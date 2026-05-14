
function MovieCard({ props }){

    return(
        <>
        <img src={props.Poster} alt={props.Title} />
            <h3>{props.Title}</h3>
            <h5>{props.Year}</h5>

        </>
    )
}

export default MovieCard