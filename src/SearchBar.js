import { useState } from "react";
import { GoSearch } from 'react-icons/go'
import { BsSearch } from 'react-icons/bs'


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
      <button type="submit" className="submit"><BsSearch /></button>
      {/* <input className="submit" type='submit' value="Submit" /> */}
      </form>
  );
};

export default SearchBar;