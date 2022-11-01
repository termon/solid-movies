import { Component } from "solid-js";

import MovieList from './components/MovieList'
import MovieView from './components/MovieView'
import Search from './components/Search'

const App: Component = () => {
  return (
    <div>
      <h3>SolidJS Demo</h3>
      <Search />
      <MovieView />
      <MovieList />
 
   </div>
  );
};

export default App;
