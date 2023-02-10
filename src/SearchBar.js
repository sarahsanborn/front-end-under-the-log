import { MdOutlineClear } from "react-icons/md";

const SearchBar = ({
  handleChange,
  handleSearchSubmit,
  handleClear,
  formData,
}) => {
  return (
    <div className="search-container">
      <form className="search-bar-list-item" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          value={formData}
          onChange={handleChange}
          placeholder="Search by name"
          className="search-input"
        />
      </form>
      <button className="clear-input" onClick={handleClear}>
        <MdOutlineClear />
      </button>
    </div>
  );
};

export default SearchBar;
