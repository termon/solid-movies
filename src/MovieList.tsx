import { Component, createSignal, createEffect, createResource, For } from "solid-js";
import {IMovie, IShortMovie} from './types'

export default ({movies, selected }) => {
    const [id,setId] = selected 
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
                <For each={movies()}>{ (m:IShortMovie,i) =>
                    <tr>
                        <td><a href="#" onclick={() => setId(m.id) }>{ m.id }</a></td>
                        <td>{ m.title }</td>
                        <td>{ m.release_date }</td>    
                    </tr> 
                }</For> 
                </tbody>
           </table>
       </>
    );

}
 