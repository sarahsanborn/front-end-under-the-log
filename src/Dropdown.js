// import * as React from 'react';
import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Button from "@mui/material/Button";
import Multiselect from "react-widgets/Multiselect";
import { AiOutlineDown } from 'react-icons/ai'

import edibleList from "./edibleList";

const Dropdown = () => {
  const [selectedPlants, setSelectedPlants] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = plant => {
    if (selectedPlants.includes(plant)) {
      setSelectedPlants(selectedPlants.filter(selectedPlant => selectedPlant !== plant));
    } else {
      setSelectedPlants([...selectedPlants, plant]);
    }
  };

  return (
    <div className="dropdown-container">
      <Button className="dropdown-button"  onClick={() => setIsOpen(!isOpen)}>
        <span className="select-species-button"> Select a species... <AiOutlineDown /> </span>
      </Button>
      {isOpen && (
        <ul className="dropdown-list">
          {edibleList.map(plant => (
            <li key={plant.id} className="dropdown-list-item">
              <label>
                <input
                  type="checkbox"
                  checked={selectedPlants.includes(plant)}
                  onChange={() => handleSelection(plant)}
                />
                {plant.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

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
};

export default Dropdown;
