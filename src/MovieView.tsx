import { Show } from "solid-js";
import MovieCarousel from "./MovieCarousel"
import { posterUrl } from "./Service";

export default ({movie}) => {
    
  return (
    <Show when={movie()}>
    <div class="card shadow-lg p-3 my-5">
        <div class="row g-0">    
            <div class="col-md-4">
            
              <div class="row g-0 mb-4">
                <img src={posterUrl(movie().poster_path)} class="card-img-top img-fluid" alt="..."></img>  
                {/* Using a derived signal to pass backdrops to Carousel - ensures its updated when movie updates */}
                <MovieCarousel posters={() => movie().images.backdrops}></MovieCarousel>    
              </div>
                           
              <Show when={ movie().videos.results.length > 0}>  
                <p>{movie().videos.results.length} Videos available</p>         
              </Show> 
            </div> 
       
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title">{movie().title} <span class="badge bg-info fs-6">{movie().vote_average}</span></h4>
                    <h5 class="fs-5">Released <span class="fs-6 text-muted">{ movie().release_date }</span></h5> 
                    <h5 class="card-subtitle mb-2 text-muted">{ movie().credits.crew.slice(0,2).map(a => <span>{a.name}&nbsp</span>)}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{ movie().credits.cast.slice(0,4).map(a => <span>{a.name}&nbsp</span>)}</h6>              
                    <p class="card-text">{movie().overview }</p>
                    <p> Runtime <span class="badge rounded-pill bg-primary">{movie().runtime}</span></p>      
                </div>
            </div>
        </div>
    </div>
    </Show>
  )
}