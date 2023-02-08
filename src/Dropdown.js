// import * as React from 'react';
import React, { useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
// import Button from "@mui/material/Button";
// import Multiselect from "react-widgets/Multiselect";
import { AiOutlineDown } from "react-icons/ai";

import edibleList from "./edibleList";

const Dropdown = ({ filterByTaxon }) => {
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (species) => {
    if (selectedSpecies.includes(species)) {
      setSelectedSpecies(
        selectedSpecies.filter((selectedPlant) => selectedPlant !== species)
      );
    } else {
      setSelectedSpecies([...selectedSpecies, species]);
    }
  };

  const handleDone = () => {
    setIsOpen(false);
    filterByTaxon(selectedSpecies);
  };

  return (
    <div className="dropdown-container">
      <button
        className={`select-species-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Select a Species...
        <span>
          <AiOutlineDown></AiOutlineDown>
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {edibleList.map((species) => (
            <li key={species.id} className="dropdown-list-item">
              <input
                type="checkbox"
                checked={selectedSpecies.includes(species.label)}
                onChange={() => handleSelection(species.label)}
              />
              {species.label}
            </li>
          ))}
          <li className="done-button-list-item">
            <button className="done-button" onClick={handleDone}>
              Done
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

// return (
//   <div className="dropdown-container">
//     <button className="dropdown-button"  onClick={() => setIsOpen(!isOpen)}>
//       <span className="select-species-button"> Select a species... <AiOutlineDown /> </span>
//     </button>
//     {isOpen && (
//       <ul className="dropdown-list">
//         {edibleList.map(species) => (
//           <li key={species.id} className="dropdown-list-item">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectedSpecies.includes(species)}
//                 onChange={() => handleSelection(species)}
//               />
//               {species.label}
//             </label>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// const [selectedOptions, setSelectedOptions] = useState([]);
// const [selectedKeys, setSelectedKeys] = useState([]);

// const customValueRenderer = (selectedOptions) => {
//   return selectedOptions.length
//     ? selectedOptions.map(({ label }) => label + ", ")
//     : "Select a species";
// };

// return (
//   <li>
//     <MultiSelect
//       value={selectedOptions}
//       onChange={setSelectedOptions}
//       options={edibleList}
//       labelledBy="Dropdown"
//       valueRenderer={customValueRenderer}
//       className='dropdown'
//     />
//   </li>
// );
// };

export default Dropdown;
