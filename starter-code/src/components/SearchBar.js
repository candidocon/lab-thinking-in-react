import React from "react";

function SearchBar(props) {
  return (
    <div className="search-div">
      <input
        type="text"
        name="search"
        placeholder="search"
        onChange={props.searchFunct}
        value={props.val}
      />
      <input type="checkbox" name="inStockOnly" onChange={props.searchFunct} />
      <label>Only Show products in stock</label>
    </div>
  );
}

export default SearchBar;
