import Search from "../components/Search.tsx";
import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import {MovieSearchResult} from "../types.ts";
import MovieList from "../components/MovieList.tsx";

const serverUrl = Deno.env.get('serverUrl')

export const handler: Handlers<{
    movies: MovieSearchResult[];
    query: string;
}> = {
    async GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("query") || "";

        const movies = await fetch(
            `${serverUrl}/search?query=${query}`
        ).then((res) => res.json());
        if (!movies) {
            return new Response("Movies search failed", { status: 404 });
        }

        return ctx.render({
            movies: movies.Search,
            query,
        });
    },
};
//
export default function Home(props: PageProps<{
    movies?: MovieSearchResult[];
    query?: string;
}>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
        <Header />
        <Search query={props.data.query || ''} />
        <MovieList movies={props.data.movies}/>
    </div>
  );
}
