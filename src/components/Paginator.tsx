import { Component, createEffect, createSignal, For } from "solid-js";
import store from '../solid-store'

function generator(c, m): any[] {
    const current = c
    const last = m
    const delta = 4
    const left = current - delta
    const right = current + delta + 1
    const range = []
    const rangeWithDots = []
  
    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    let l = undefined
    for (const i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    //console.log(`paginate page:${current} last:${last} pages:${rangeWithDots}`)
    return rangeWithDots;
}


const Paginator: Component = () => {
    const {setPage, page, movies } = store

    const [pages,setPages] = createSignal([])

    // regenerate paginator pages every time the page or movies changes
    createEffect(() => setPages(generator(page(),movies().length)) );
    
    const moveNext = () => {
        if (page() < pages().length) {
            setPage(page()+1)
        }
    }
    const movePrev = () => {
        if (page() > 1) {
            setPage(page()-1)
        }
    }
    const moveToPage = (p) => {
        setPage(p)
    }
  
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" classList={{disabled: page() === 1}}>
                    <button class="page-link" onclick={movePrev} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li> 
                <For each={pages()}>{ 
                    (p,i) => (p === '...') ? 
                        <li class="page-item">
                            <a class="page-link">{p}</a>
                        </li>
                        :                       
                        <li class="page-item" classList={{active: page() === p}}>
                            <button class="page-link" onclick={()=>moveToPage(p)}>{p}</button>
                        </li>                    
                }
                </For>
                <li class="page-item" classList={{disabled: page() === pages().at(-1)}}>
                    <button class="page-link" onclick={moveNext} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Paginator