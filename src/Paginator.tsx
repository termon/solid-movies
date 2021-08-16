import { Component, For } from "solid-js";
import {movies, page, setPage, pages, setPages} from './solid-store'

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
    console.log(`paginate page:${current} last:${last} pages:${rangeWithDots}`)
    return rangeWithDots;
}

const paginate = (page, movies) => generator(page(),movies().length)

const Paginator: Component = () => {
    
    setPages(paginate(page, movies))

    const moveNext = () => {
        if (page() < pages().length) {
            setPage(page()+1)
            setPages(paginate(page, movies))
        }
    }
    const movePrev = () => {
        if (page() > 1) {
            setPage(page()-1)
            setPages(paginate(page, movies))
        }
    }
    const moveToPage = (p) => {
        setPage(p)
        setPages(paginate(page, movies))
    }
  
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item">
                <button class="page-link" onclick={movePrev} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                </button>
            </li> 
            <For each={pages()}>{ 
                (p,i) =>  {
                    if (p === '...') return <li class="page-item"><button class="page-link">{p}</button></li>
                    else if (p == page()) return <li class="page-item" classList={{active: p == page()}}><button class="page-link" onclick={()=>moveToPage(p)}>{p}</button></li>
                    else return <li class="page-item"><button class="page-link" onclick={()=>moveToPage(p)}>{p}</button></li>
                }
            }
            </For>
        
            <li class="page-item">
                <button class="page-link" onclick={moveNext} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
            </ul>
        </nav>
    )
}
export default Paginator