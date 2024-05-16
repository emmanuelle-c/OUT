import SearchBar from "../SearchBar";
import { useState } from "react";
function Search() {
    const [searchInput, setSearchInput] = useState("");
    return (
        <div>
            <div></div>
            <div></div>
            <div>
                <SearchBar
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>item</li>
                </ul>
            </div>
        </div>
    );
}

export default Search;
