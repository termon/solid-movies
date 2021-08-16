import { Component } from "solid-js";

import MovieList from './MovieList'
import MovieView from './MovieView'
import Paginator from "./Paginator";
import Search from './Search'

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
