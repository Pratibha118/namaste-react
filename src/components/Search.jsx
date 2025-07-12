import { useState } from "react"

const Search =()=>{
    const [searchValue, setSearchValue] = useState();
    return <div>
        <input value={searchValue}  onChange={(e)=>setSearchValue(e.value)}/>
        <button>search</button>
    </div>
}

export default Search;