import React, { useState } from "react";
import FilterModal from "./FilterModal";

export const Filter = () => {
  //state for controlling model visiability.
  const [isModalOpen, setIsModalOpen] = useState(false);
  //for storing selected filters
  const [selectedFilters, setSelectedFilters] = useState({});
  //finction to hundle opening the model/popup window
  const handleOpenModal = () => {
    setIsModalOpen(true); //set ismodelopen to true to openthe window
  };
  const handleCloseModel = () => {
    setIsModalOpen(false);
  };

  //Function to handle Changes in filters
  const handleFilterChange = (filterName, value) => {
    //update the selected filters with the new values
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <>
      {/* click event is to open the model */}
      <span class="material-symbols-outlined filter" onClick={handleOpenModal}>
        tune
      </span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModel}
        />
      )}
    </>
  );
};
export default Filter;
