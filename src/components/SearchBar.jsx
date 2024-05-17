import PropTypes from "prop-types";
import "../styles/SearchBar.css";
function SearchBar({ searchInput, setSearchInput }) {
    const navigate = useNavigate();
    return (
        <form className="search-container">
            <input
                className="search"
                placeholder="Recherche une activité proche de chez toi"
                type="text"
                value={searchInput}
                onChange={(event) => {
                    setSearchInput(event.target.value);
                }}
            />
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.445 13.366L11.666 9.587C12.2551 8.62007 12.5659 7.50926 12.564 6.377C12.564 2.96 9.603 8.08612e-08 6.186 8.08612e-08C5.37361 -0.000131279 4.56914 0.159785 3.81856 0.470614C3.06799 0.781443 2.38599 1.2371 1.81154 1.81154C1.2371 2.38599 0.781443 3.06799 0.470614 3.81856C0.159785 4.56914 -0.000131279 5.37361 8.08612e-08 6.186C8.08612e-08 9.602 2.961 12.563 6.377 12.563C7.47195 12.564 8.54731 12.2726 9.492 11.719L13.291 15.52C13.4697 15.6982 13.7117 15.7983 13.964 15.7983C14.2163 15.7983 14.4583 15.6982 14.637 15.52L15.58 14.577C15.951 14.206 15.816 13.737 15.445 13.366ZM1.904 6.186C1.90387 5.6236 2.01453 5.06667 2.22966 4.54704C2.44479 4.02741 2.76018 3.55525 3.15782 3.15752C3.55545 2.7598 4.02754 2.4443 4.54712 2.22904C5.0667 2.01379 5.6236 1.903 6.186 1.903C8.552 1.903 10.66 4.01 10.66 6.377C10.6597 7.51284 10.2084 8.60209 9.40525 9.40525C8.60209 10.2084 7.51284 10.6597 6.377 10.66C4.011 10.659 1.904 8.551 1.904 6.186Z"
                    fill="black"
                />
            </svg>
        </form>
    );
}
SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
