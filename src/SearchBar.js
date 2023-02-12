import React from "react";
import { MdOutlineClear } from "react-icons/md";

const SearchBar = ({
  handleChange,
  handleSearchSubmit,
  handleSearchClear,
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
          placeholder="Search more species"
          className="search-input"
        />
      </form>
      <button className="clear-input" onClick={handleSearchClear}>
        <MdOutlineClear />
      </button>
    </div>
  );
};

export default SearchBar;
