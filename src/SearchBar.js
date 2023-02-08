import { useState } from "react";
import { MdOutlineClear } from 'react-icons/md'

const SearchBar = ({ searchByTaxon }) => {
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log('handlin some change')
  };

  const handleSearchSubmit = (event) => {
    console.log('something was submitted!')
    event.preventDefault();
    searchByTaxon(formData);
  };

  const handleClear = () => {
    console.log('We are in the clear');
    setFormData('');
  };

  return (
    <form className="search-bar-list-item" onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <input
          type="text"
          id="search"
          name="search"
          value={formData}
          onChange={handleChange}
          placeholder='Search by name'
          className="search-input"
        />
        <button className="clear-input" onClick={handleClear}>
          <MdOutlineClear />
        </button>
        {/* <input type="button" value={<MdOutlineClear/>} onClick={handleClear} className='clear-input' /> */}
        {/* <button type="submit" className="submit">
          X
        </button> */}

      </div>
    </form>
  );
};

export default SearchBar;
