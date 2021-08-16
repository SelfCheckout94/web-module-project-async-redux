import React, { useState } from "react";

import { connect } from "react-redux";
import { search } from "./../actions";

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
          placeholder='Sword, "Potion", robe, etc...'
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
