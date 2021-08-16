import { Component, createSignal } from "solid-js";

export default (props) => {
  const [search,setSearch] = props.search //createSignal('')

  return (
      <form id="searchForm">
            <div class="row">
                <input class="col-10 form-input" value={ search() } placeholder="search...." onclick={(e)=>setSearch(e.currentTarget.value)}/>
                <button type="reset" class="btn btn-warning btn-rounded col-1 mx-3" >Clear</button>
            </div> 
            <div class="row mt-2"> 
                <div class="col-2">
                    <input type="radio" name="customSearch" value="popular" onclick={(e)=>setSearch(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Popular</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="top" onclick={(e)=>setSearch(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Top Rated</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="trending" onclick={(e)=>setSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Trending</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="playing" onclick={(e)=>setSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Now Playing</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="upcoming" onclick={(e)=>setSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Upcoming</label>
                </div>
            </div>  
      </form>
  );
};

