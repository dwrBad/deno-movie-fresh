type Props = {
    query: string
}

const Search = (props: Props) => {
    return <div >
        <h2 class="font-bold bg-slate-800 my-4">Search</h2>
        <form class={`flex w-full gap-2`}>
            <input class="border p-2 w-full" name={'query'} placeholder={"What movie?"} value={props.query}/>
            <button
                type="submit"
                class={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-10`}
            >
                Search
            </button>
        </form>
    </div>
}

export default Search

