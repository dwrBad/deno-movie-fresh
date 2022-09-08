import { MovieSearchResult } from "../types.ts";
import MoviePanel from "./MoviePanel.tsx";

type Props = {
    movies: MovieSearchResult[]
}

const MovieList = (props: Props) => {
    if (!props.movies) {
        return null
    }

    return <div class={"flex flex-wrap justify-between"}>
        {props.movies?.map((m) => <MoviePanel movie={m}/>)}
    </div>
}

export default MovieList
