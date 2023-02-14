import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import newedibleList from "./newedibleList";

const Dropdown = ({
  handleSelection,
  handleDone,
  handleSelectAll,
  allSelected,
  selectedSpecies,
  alternateOpenClose,
  isOpen,
  displaySpecies,
}) => {

  const dropdownDisplaySpecies = [
    "Arrowleaf balsamroot", 
    "Black landscape morel",
    "Chanterelle",
    "Lady fern fiddlehead",
    "Oyster mushroom",
    "Red huckleberry",
    "Salmonberry",
    "Stinging nettle",
    "Strawberry",
    "Wood sorrel"
  ]
  const filterByDisplaySpecies = (species) => {
    if (displaySpecies.includes(species.label)) {
      return true;
    }
    return false;
  };

  return (
    <div className="dropdown-container">
      <button
        className={`select-species-button ${isOpen ? "open" : ""}`}
        onClick={alternateOpenClose}
      >
        Common Foragables
        <span>
          <AiOutlineDown
            className={isOpen ? "rotated-up" : "rotated-down"}
          ></AiOutlineDown>
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <ul className="dropdown-species-list-with-scroll">
            <li className="dropdown-list-item">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAll}
              />
              Select All
            </li>
            {newedibleList.filter(filterByDisplaySpecies).map((species) => (
              <li key={species.id} className="dropdown-list-item">
                <input
                  type="checkbox"
                  checked={
                    allSelected || selectedSpecies.includes(species.label)
                  }
                  onChange={() => handleSelection(species.label)}
                />
                {species.label}
              </li>
            ))}
            {/* {newedibleList.map((species) => (
              <li key={species.id} className="dropdown-list-item">
                <input
                  type="checkbox"
                  checked={
                    allSelected || selectedSpecies.includes(species.label)
                  }
                  onChange={() => handleSelection(species.label)}
                />
                {species.label}
              </li>
            ))} */}
          </ul>
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
