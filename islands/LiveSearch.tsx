import MovieList from "../components/MovieList.tsx";
import { useEffect, useState } from "preact/hooks";


const LiveSearch = () => {
    const [value, setValue] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/api/search?query='+encodeURIComponent(value))
            .then((result) => result.json())
            .then(setMovies)
    }, [value])


    return <div>
        <h2 class="font-bold bg-slate-800 my-4">Search</h2>
        <div class={`flex w-full gap-2`}>
            <input class="border p-2 w-full" name={'query'} placeholder={"What movie?"}
                   onKeyUp={(event) => {
                       setValue(event.currentTarget.value)
                   }}
            />
        </div>
        {movies && <MovieList movies={movies} />}
    </div>
}

export default LiveSearch

