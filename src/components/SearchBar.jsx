function SearchBar({ searchInput, setSearchInput }) {
    return (
        <section className="search-decoration">
            <form className="main-search-container">
                <input
                    className="main-search"
                    placeholder="Looking for a monster ?"
                    type="text"
                    value={searchInput}
                    onChange={(event) => {
                        setSearchInput(event.target.value);
                    }}
                />
            </form>
        </section>
    );
}

export default SearchBar;
