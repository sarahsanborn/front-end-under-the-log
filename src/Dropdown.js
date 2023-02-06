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
      : "Select taxa or input your own...";
  };

  // useEffect(() => {
  //   setSelectedOptions([{ label: "All", value: "*" }, ...edibleList]);
  // }, []);

  // function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
  //   if (value && value.some((o) => o.value === "*")) {
  //     return `${placeholderButtonLabel}: All`;
  //   } else {
  //     return `${placeholderButtonLabel}: ${value.length} selected`;
  //   }
  // }

  // function onChange(value, event) {
  //   if (event.action === "select-option" && event.option.value === "*") {
  //     this.setState(this.edibleList);
  //   } else if (
  //     event.action === "deselect-option" &&
  //     event.option.value === "*"
  //   ) {
  //     this.setState([]);
  //   } else if (event.action === "deselect-option") {
  //     this.setState(value.filter((o) => o.value !== "*"));
  //   } else if (value.length === this.edibleList.length - 1) {
  //     this.setState(this.edibleList);
  //   } else {
  //     this.setState(value);
  //   }
  // }
  // const retrieveRelevantResults = () => {
  //   if (userTextInput){
  //     if (userTextInput)
  //   }
  //   console.log("hi");
  // };

  return (
    <div>
      <MultiSelect
        // edibleList={[{ label: "All", value: "*" }, ...edibleList]}
        // placeholderButtonLabel="Colors"
        // getDropdownButtonLabel={getDropdownButtonLabel}
        value={selectedOptions}
        onChange={setSelectedOptions}
        options={edibleList}
        labelledBy="Cheese"
        valueRenderer={customValueRenderer}
      />
      {/* <Multiselect
        // defaultValue={["Borage"]}
        dataKey="id"
        data={edibleList}
        filter="contains"
        placeholder="No taxa selected"
        textField="label"
        value={selectedKeys}
        onChange={(event) => setSelectedKeys(event)}
        // onChange={setSelectedKeys && cheese}
        // onChange={cheese}
      /> */}
      {/* <Button variant="Contained" onClick={retrieveRelevantResults}> */}
      {/* Submit
      </Button> */}
    </div>
  );
};

export default Dropdown;
