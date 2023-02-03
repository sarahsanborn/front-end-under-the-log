import { useState } from "react";


const SearchBar = ( { searchByTaxon }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    searchByTaxon(formData);

    setFormData('Search by name')
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type='text'
        id='search'
        name='search'
        value={formData}
        onChange={handleChange}
        placeholder='Search by name'
      />
      <input className="submit" type='submit' value='Submit'></input>
      </form>
  );
};

export default SearchBar;