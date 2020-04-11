import React from "react";

function SearchFilter(props) {
  return (
    <form className="search mb-5">
      <div className="form-group text-white">
        {/* <label htmlFor="language">Search by name:</label> */}
        <input
          value={props.search}
          onChange={props.updateSearch}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Enter name to filter"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchFilter;
