import { HandlerContext } from "$fresh/server.ts";

const serverUrl = Deno.env.get('serverUrl')

export const handler = async (req: Request, _ctx: HandlerContext): Response => {
    const url = new URL(req.url);
    const query = url.searchParams.get("query") || "";

    const movies = await fetch(
        `${serverUrl}/search?query=${query}`
    ).then((res) => res.json())

    if (!movies) {
        return new Response("Movies search failed", {status: 404});
    }

    const body = JSON.stringify(movies.Search);

    return new Response(body)
};
