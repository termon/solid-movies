import { Component, createSignal } from "solid-js";
import store from '../solid-store'

const Search: Component = () => {
  const { query, setQuery } = store  
  return (

      <form onsubmit={(e) => e.preventDefault()} id="searchForm">
            <div class="row">
                <input class="col-10 form-input" value={ query() } placeholder="search...." onchange={(e)=>setQuery(e.currentTarget.value)}/>
                <button type="reset" class="btn btn-warning btn-rounded col-1 mx-3" >Clear</button>
            </div> 
            <div class="row mt-2"> 
                <div class="col-2">
                    <input type="radio" name="customSearch" value="popular" onclick={(e)=> setQuery(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Popular</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="top" onclick={(e)=>setQuery(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Top Rated</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="trending" onclick={(e)=>setQuery(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Trending</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="playing" onclick={(e)=>setQuery(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Now Playing</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="upcoming" onclick={(e)=>setQuery(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Upcoming</label>
                </div>
            </div>  
      </form>
  );
};
export default Search
