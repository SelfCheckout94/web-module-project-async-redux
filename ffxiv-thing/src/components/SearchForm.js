import React, { useState } from "react";

import { connect } from "react-redux";
import { search } from "./../actions";

// by default displays items starting at index 0
// When user searches they it will populate the page with items containing the term

const initialFormValue = "";

function SearchForm(props) {
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleChanges = (e) => {
    e.preventDefault();
    setFormValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(formValue);
    setFormValue(initialFormValue);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <label className="searchLabel">
        <b>Item Search: </b>
        <input
          name="search"
          value={formValue}
          placeholder="potion, sword, robe, etc..."
          onChange={handleChanges}
        />
      </label>
      <button className="searchBtn" type="submit">
        Search
      </button>
    </form>
  );
}

export default connect(null, { search })(SearchForm);
