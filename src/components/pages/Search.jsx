import { EmblaCarousel } from "../EmblaCarousel";

function Search() {
    const OPTIONS = {}
    const SLIDE_COUNT = 3
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    
    return(
        <>
            <p>Search</p>
            <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
        </>
    )
}

export default Search;