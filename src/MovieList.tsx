import { For, Resource } from "solid-js";
import { IShortMovie} from './types'

interface Props {
    movies:Resource<IShortMovie[]>, 
    onSelect:any
}
export default ({movies, onSelect } : Props) => {   
    return (
        <>
            <h3 class="mt-4">Movie List</h3>
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
                        <td><a href="#" onclick={() => onSelect(m.id) }>{ m.id }</a></td>
                        <td>{ m.title }</td>
                        <td>{ m.release_date }</td>    
                    </tr> 
                }</For> 
                </tbody>
           </table>
       </>
    );

}
 