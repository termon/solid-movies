import { Component, createSignal, createEffect, createResource, For, Resource } from "solid-js";
import { fetchMovies,fetchMovie } from './Store'
import MovieList from './MovieList'
import MovieView from './MovieView'
import Search from './Search'

import styles from "./App.module.css";

const App: Component = () => {
  const [query,setQuery] = createSignal('')
  const [id,setId] = createSignal()

  const [movies] = createResource(query, fetchMovies)
  const [movie]  = createResource(id,fetchMovie)
  createEffect( () => { console.log('Query', movies()) })
  createEffect( () => { console.log('Id', id()) })

  return (
    <>
      <h3>SolidJS Demo</h3>
      <Search search={[query,setQuery]} />
      <MovieView movie={movie} />
      <MovieList movies={movies} selected={[id,setId]} />

   </>
  );
};

export default App;
