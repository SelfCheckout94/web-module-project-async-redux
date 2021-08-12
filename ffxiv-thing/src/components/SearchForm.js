import React, { useEffect, useState } from "react";

import axios from "axios";
import { connect } from "react-redux";
import { search } from "./../actions";

// by default displays items starting at index 0
// When user searches they it will populate the page with items containing the term

const initialFormValue = "";

function SearchForm(props) {
  const [formValue, setFormValue] = useState(initialFormValue);

  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  const handleChanges = (e) => {
    e.preventDefault();
    setFormValue(e.target.value);
  };

  const handleClick = () => {
    // axios
    //   // .get("https://xivapi.com/item/")
    //   .get(
    //     `https://xivapi.com/search/?string=${capitalizeFirstLetter(
    //       formValue
    //     )}&indexes=Item`
    //   )
    //   .then((res) => {
    //     const results = res.data.Results;
    //     const resultsFilter = results.filter((obj) => {
    //       return obj.Name === formValue;
    //     });
    //     props.search(resultsFilter);
    //     // props.search(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <label>
        Item Search:
        <input
          name="search"
          value={formValue}
          placeholder="Search..."
          onChange={handleChanges}
        />
      </label>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { search })(SearchForm);
