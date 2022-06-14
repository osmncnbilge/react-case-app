import React from "react";
import "./_search-input.scss";

function SearchInput({ searchText, handleChange }) {
  return (
    <>
      <label className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Ürün ara"
          value={searchText}
          onChange={handleChange}
        />
        <img src="/assets/images/search_icon.svg" alt="search_icon" />
        <button className="search-button">Ara</button>
      </label>
    </>
  );
}

export default SearchInput;
