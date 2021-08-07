import {IShortMovie, IMovie} from './types'

export const fetchMovies = async (search:string) => {
    if (search && search.length > 0) {
        const resp = await fetch(_query(search),_getTokenObj())
        const json = await resp.json()
        return json.results
    }
    return []
}

export const fetchMovie = async (id:any) => {   
    const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,images,videos`, _getTokenObj())
    const json = await resp.json()
    return json
}


const _fetchMoviesSuccessAction = (json: {results: IShortMovie[]}) => {
    if (json.results) {  
        return json.results   
    }
    return [] 
}

const _fetchMovieSuccessAction = (json: IMovie) => {   
    if (json.title) {
            return json
    }
    return undefined
}

const _fetchFailureAction = (error:any) => {
        console.log('error', error)
    }

const _query = (search:string) => {
    if (search === ':trending') {
        return 'https://api.themoviedb.org/3/trending/movie/week'
    } else if (search === ':popular') {
        return 'https://api.themoviedb.org/3/movie/popular'
    } else if (search === ':playing') {
        return 'https://api.themoviedb.org/3/movie/now_playing'
    } else if (search === ':upcoming') {
        return 'https://api.themoviedb.org/3/movie/upcoming'
    } else if (search === ':top') {
        return 'https://api.themoviedb.org/3/movie/top_rated'
    } else {
        return `https://api.themoviedb.org/3/search/movie?query="${search}"`
    }
}

const _getTokenObj = () => { 
    //const TOKEN = import.meta.env.VITE_MOVIEDB_TOKEN
    const TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDZlNGVlOTVkMTM0ZGE4ZDllOTUyZDg3ZWQ5OGViNyIsInN1YiI6IjVhYTNmYmY2OTI1MTQxMjc4ZDAwZDU0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lx2bw91VSdbeU-NVOeg2lfOBCUKoRU7mlZGktWK-iZc'

    return {
        method: 'GET',
        headers: new Headers(
        {
            'Authorization': `Bearer ${TOKEN}`, 
            'Content-Type': 'application/json'
        })
    } 
}

