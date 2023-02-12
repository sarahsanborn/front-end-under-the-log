import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import edibleList from "./edibleList";

const Dropdown = ({
  handleSelection,
  handleDone,
  handleSelectAll,
  allSelected,
  selectedSpecies,
  alternateOpenClose,
  isOpen,
}) => {
  return (
    <div className="dropdown-container">
      <button
        className={`select-species-button ${isOpen ? "open" : ""}`}
        onClick={alternateOpenClose}
      >
        Select Edible Species
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
              {/* <button className="dropdown-button" onClick={handleSelectAll}>
                Select All
              </button>
              <span> </span>
              <button className="dropdown-button" onClick={handleClear}>
                Clear
              </button> */}
            </li>
            {edibleList.map((species) => (
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
