import {MovieSearchResult} from "../types.ts";

const MovieList = (props: { movie: MovieSearchResult }) => {
    const {movie} = props

    return <div class={"p-3 text-center w-[200px] flex-shrink-0 border border-gray my-4"}>
        <figure>
            {movie.Poster && <img src={movie.Poster} alt={movie.Title}/>}
        </figure>
        <h3>{movie.Title}</h3>

    </div>
}

export default MovieList
