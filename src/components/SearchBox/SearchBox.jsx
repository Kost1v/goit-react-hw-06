import css from "./SearchBox.module.css";
import React from "react";

const SearchBox = ({filter, setFilter}) => {
  return (
    <div>
      <p>Find contacts</p>
      <input
        type="text"
        value={filter}
        placeholder="Enter keyword to search"
        onChange={(event) => {
          setFilter(event.target.value);
        }}
      />
      {/* <button
        type="button"
        onClick={() => setFilter("Hi my gorgeos friend on the Internet!")}
      >
        Search
      </button> */}
    </div>
  );
};

export default SearchBox;
