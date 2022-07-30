import { createSignal, createResource } from 'solid-js'
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

const fetchMovies = async (s:string):Promise<IShortMovie[]> => { 
    if (s && s.length > 0) {  
        const resp = await fetch(_movieQueryUrl(s, page()),_getTokenObj())
        const json = await resp.json()
        console.log('fetchMovies', s, json.results)
        return json.results
    }
    return []
} 

const fetchMovie = async (id): Promise<IMovie> => {   
    var resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images,videos`, _getTokenObj())
    var json = resp.json()
    console.log('fetchMovie', id, json)
    return json
}

// exported store API
export const [search, setSearch] = createSignal("")
export const [movieId, setMovieId] = createSignal()

export const [movie]  = createResource(movieId,fetchMovie)
export const [movies] = createResource(search, fetchMovies, {initialValue: []})

export const posterUrl = (poster:string, size='original', path = 'https://image.tmdb.org/t/p/') => path + size + poster  

// used for paginator - better way to make a reactive paginator?
export const [page, setPage] = createSignal(1)
export const [pages, setPages] = createSignal([])



