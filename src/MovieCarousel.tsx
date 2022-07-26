import { For } from "solid-js";
import { posterUrl } from "./Service";
import { IImage } from "./types";

export default ({posters}) => {

  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <For each={posters()}> 
            { (p:IImage,i) =>  
              <div class="carousel-item active" classList={{active: i()==0 }} >                 
                <img src={posterUrl(p.file_path)} class="d-block w-100" alt="..."/> 
              </div>
            }    
          </For>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </a>
    </div>
  )
}