import { createSignal, createRoot, createResource } from "solid-js";
import { IMovie, IShortMovie } from './types'

// API token should be stored in .env.* under key VITE_MOVIEDB_TOKEN
const _getTokenObj = () => { 
    const TOKEN = import.meta.env.VITE_MOVIEDB_TOKEN
    return {
        method: 'GET',
        headers: new Headers(
        {
            'Authorization': `Bearer ${TOKEN}`, 
            'Content-Type': 'application/json'
        })
    } 
}

const _movieQueryUrl = (search:string, page = 1) => {
    if (search === ':trending') {
        return `https://api.themoviedb.org/3/trending/movie/week?page=${page}`
    } else if (search === ':popular') {
        return `https://api.themoviedb.org/3/movie/popular?page=${page}`
    } else if (search === ':playing') {
        return `https://api.themoviedb.org/3/movie/now_playing?page=${page}`
    } else if (search === ':upcoming') {
        return `https://api.themoviedb.org/3/movie/upcoming?page=${page}`
    } else if (search === ':top') {
        return `https://api.themoviedb.org/3/movie/top_rated?page=${page}`
    } else {
        return `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}`
    }
}

const fetchMovies = async (search:{query:string,page:number}):Promise<IShortMovie[]> => { 
    if (search.query && search.query.length > 0) {  
        const resp = await fetch(_movieQueryUrl(search.query,search.page),_getTokenObj())
        const json = await resp.json()
        //console.log('fetchMovies', search.query, json.results,_movieQueryUrl(search.query,search.page))
        return json.results
    }
    return []
} 

const fetchMovie = async (id): Promise<IMovie> => {   
    var resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images,videos`, _getTokenObj())
    var json = resp.json()
    console.log('fetchMovie returns a promise', id, json)
    return json
}

export const posterUrl = (poster:string, size='original', path = 'https://image.tmdb.org/t/p/') => path + size + poster  

function createStore() {

    // exported store API
    const [search, setSearch] = createSignal({query:'', page:1})
    const [movieId, setMovieId] = createSignal()

    const [movie]  = createResource(movieId,fetchMovie)
    const [movies] = createResource(search, fetchMovies, {initialValue: []})

    const setPage = (p:number)  => setSearch({...search(), page: p})
    const setQuery = (q:string) => setSearch({...search(), query:q})
    const page = () => search().page
    const query = () => search().query

    return { setPage,setQuery, page, query, movieId, setMovieId, movie, movies };

}

export default createRoot(createStore);