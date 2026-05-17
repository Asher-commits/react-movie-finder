
const API_KEY = "f972b399"

const BASE_URL = "https://www.omdbapi.com/";


export async function getPopularMovies(){

    const response = await fetch(`${BASE_URL}?s=movie&page=1&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search;

}

export async function searchMovies(query){

    const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);

    const data = await response.json();
    return data.Search
}