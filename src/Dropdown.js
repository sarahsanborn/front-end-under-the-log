import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import edibleList from "./edibleList";
import newedibleList from "./newedibleList";

const Dropdown = ({
  handleSelection,
  handleDone,
  handleSelectAll,
  allSelected,
  selectedSpecies,
  alternateOpenClose,
  isOpen,
  plantsSelected,
  handlePlantsSelected,
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
            </li>
            <li className="dropdown-list-item">
              <input
                type="checkbox"
                checked={plantsSelected}
                onChange={handlePlantsSelected}
              />
              Select All Plants
            </li>
            {newedibleList.map((species) => (
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
