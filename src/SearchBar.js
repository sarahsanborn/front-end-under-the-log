import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchByTaxon }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchByTaxon(formData);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        value={formData}
        onChange={handleChange}
        placeholder='Search by name'
        className="search-input"
      />
      <button type="submit" className="submit">
        Search <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
