import Header from "../components/Header.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import {MovieSearchResult} from "../types.ts";
import LiveSearch from "../islands/LiveSearch.tsx";

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
export default function SearchPage(props: PageProps<{
    movies?: MovieSearchResult[];
    query?: string;
}>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
        <Header />
        <LiveSearch query={props.data.query || ''} />
    </div>
  );
}
