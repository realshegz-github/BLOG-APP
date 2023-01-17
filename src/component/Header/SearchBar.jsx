import React from "react";

const SearchBar = ({ formSubmit, handleChange, searchInput }) => {
  return (
    <div className="search-container">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />

        {/* {searchInput && <span onClick={clearSearch}>X</span>} */}
        <button>Enter</button>
      </form>
    </div>
  );
};

export default SearchBar;
