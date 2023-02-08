import React, { useState } from "react";
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
          <li>
            <button className="done-button" onClick={handleDone}>
              Done
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
