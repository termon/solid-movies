
export default ({query, onSearch, onClear}) => {
   
    // only search on pressing enter key
    const searchOnEnter = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault()
            onSearch(e.currentTarget.value)
        }
    }

    return (
        <form id="searchForm">
            <div class="row">
                <input class="col-10 form-input" value={ query() } placeholder="search...." onkeydown={(e) => searchOnEnter(e)} />
                <button type="button" class="btn btn-warning btn-rounded col-1 mx-3" onclick={(e) => onClear()} >Clear</button>
            </div> 
            <div class="row mt-2"> 
                <div class="col-2">
                    <input type="radio" name="customSearch" value="popular" onclick={(e)=>onSearch(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Popular</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="top" onclick={(e)=>onSearch(`:${e.currentTarget.value}`)}/>
                    <label for="customSearch">Top Rated</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="trending" onclick={(e)=>onSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Trending</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="playing" onclick={(e)=>onSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Now Playing</label>
                </div>
                <div class="col-2">
                    <input type="radio" name="customSearch" value="upcoming" onclick={(e)=>onSearch(`:${e.currentTarget.value}`)} />
                    <label for="customSearch">Upcoming</label>
                </div>
            </div>  
        </form>
    );
};

