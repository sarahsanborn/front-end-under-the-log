import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import edibleList from "./edibleList";

const Dropdown = ({ filterByTaxon }) => {
  const [allSelected, setAllSelected] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (species) => {
    setAllSelected(false);
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

  const handleSelectAll = () => {
    if (allSelected === false) {
      setAllSelected(true);
      const allSpecies = edibleList.map((species) => species.label);
      setSelectedSpecies(allSpecies);
    } else if (allSelected === true) {
      setAllSelected(false);
      setSelectedSpecies([]);
    }
  };

  const handleClear = () => {
    setAllSelected(false);
    setSelectedSpecies([]);
  };

  return (
    <div className="dropdown-container">
      <button
        className={`select-species-button ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        Select a Species
        <span>
          <AiOutlineDown
            className={isOpen ? "rotated-up" : "rotated-down"}
          ></AiOutlineDown>
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {edibleList.map((species) => (
            <li key={species.id} className="dropdown-list-item">
              <input
                type="checkbox"
                checked={allSelected || selectedSpecies.includes(species.label)}
                onChange={() => handleSelection(species.label)}
              />
              {species.label}
            </li>
          ))}
          <li>
            <button className="dropdown-button" onClick={handleSelectAll}>
              Select All
            </button>
          </li>
          <li>
            <button className="dropdown-button" onClick={handleClear}>
              Clear
            </button>
          </li>
          <li>
            <button className="dropdown-button" onClick={handleDone}>
              Done
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
