import { Component, createSignal, createResource, Show } from "solid-js";
import { fetchMovies, fetchMovie } from './Service'

import MovieList from './MovieList'
import MovieView from './MovieView'
import Search from './Search'

const App: Component = () => {
  // create signals
  const [query,setQuery] = createSignal('')
  const [id,setId] = createSignal(undefined)

  // create resources
  const [movies] = createResource(query, fetchMovies, {initialValue: []})
  const [movie]  = createResource(id,fetchMovie)
 
  // query callback
  const searchQuery = (q) => {
    // reset current movie id when new query executed
    setId(undefined)
    setQuery(q)
  }
 
  // clear query callback
  const clearQuery = () => {
    // reset current movie id when query cleared
    setId(undefined)
    setQuery('')
  }

  return (
    <>
      <h3>SolidJS Demo</h3>
      <Search query={query} onSearch={searchQuery} onClear={clearQuery}/>
      
      {/* only display movie when id is set */}
      <Show when={id()}> 
        <MovieView movie={movie} />
      </Show>

      <MovieList movies={movies} onSelect={setId} />

   </>
  );
};

export default App;
