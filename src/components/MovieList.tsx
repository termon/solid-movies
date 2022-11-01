import { Component, For } from "solid-js";
import Paginator from "./Paginator";
import store from '../solid-store'

const MovieList: Component = () => {
    const {movies, setMovieId} = store
    return (
        <>
            <h3>Movie List</h3>
            <span>{movies.loading && "Loading..."}</span>           
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>          
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody> 
                <For each={movies()}>{ 
                    (m,i) =>
                    <tr>
                        <td><a href="#" onclick={() => setMovieId(m.id) }>{ m.id }</a></td>
                        <td>{ m.title }</td>
                        <td>{ m.release_date }</td>    
                    </tr> 
                }</For> 
                </tbody>
           </table>
           <Paginator />
       </>
    );
}
export default MovieList
 