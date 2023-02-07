// import * as React from 'react';
import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import Button from "@mui/material/Button";
import Multiselect from "react-widgets/Multiselect";

import edibleList from "./edibleList";

const Dropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const customValueRenderer = (selectedOptions) => {
    return selectedOptions.length
      ? selectedOptions.map(({ label }) => label + ", ")
      : "Select a species";
  };

  return (
    <li>
      <MultiSelect
        value={selectedOptions}
        onChange={setSelectedOptions}
        options={edibleList}
        labelledBy="Dropdown"
        valueRenderer={customValueRenderer}
        className='dropdown'
      />
    </li>
  );
};

export default Dropdown;
