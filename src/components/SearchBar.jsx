import PropTypes from "prop-types";
import "../styles/SearchBar.css";
function SearchBar({ searchInput, setSearchInput }) {
    return (
        <form className="main-search-container">
            <input
                className="main-search"
                placeholder="Recherche une activité proche de chez toi"
                type="text"
                value={searchInput}
                onChange={(event) => {
                    setSearchInput(event.target.value);
                }}
            />
        </form>
    );
}
SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
