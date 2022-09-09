import {Handlers, PageProps} from "$fresh/server.ts";
import {Movie, MovieSearchResult} from "../../types.ts";
import Header from "../../components/Header.tsx";

const serverUrl = Deno.env.get('serverUrl')

export const handler: Handlers<{
    movies: MovieSearchResult[];
    query: string;
}> = {
    async GET(req, ctx) {
        const id = ctx.params.id

        if (!id) {
            return new Response("Movie lookup failed", {status: 404});
        }

        const movie = await fetch(
            `${serverUrl}/movie?id=${id}`
        ).then((res) => res.json());
        if (!movie) {
            return new Response("Movie lookup failed", {status: 404});
        }

        return ctx.render({
            movie: movie,
        });
    },
};

export default function MovieSingle(props: PageProps<{
    movie: Movie
}>) {
    console.log(props.data?.movie)
    const movie = props.data?.movie

    return <>
        <Header/>
        <div class={"p-3 text-center w-[500px] flex-shrink-0 border my-4"}>
            <h3 class={"text-3xl mb-3 text-bold"}>{movie.Title}</h3>

            <figure class={"text-center w-full"}>
                {movie.Poster && <img src={movie.Poster} alt={movie.Title} class={"m-auto"}/>}
            </figure>
            <table>
                {Object.entries(movie).map(([key, value]) => <tr><th>{key}</th><td class={"text-left"}>{value}</td></tr>)}
            </table>
        </div>
    </>
}
