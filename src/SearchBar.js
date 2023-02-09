import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

const SearchBar = ({ searchByTaxon, resetSearch }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
    // console.log("handlin some change");
  };

  const handleSearchSubmit = (event) => {
    // console.log("something was submitted!");
    event.preventDefault();
    resetSearch(true);
    searchByTaxon(formData);
  };

  const handleClear = () => {
    // console.log("We are in the clear");
    setFormData("");
    resetSearch();
  };

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
