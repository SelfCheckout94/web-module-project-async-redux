import React from "react";
import { add } from "./../actions";
import axios from "axios";
import { connect } from "react-redux";

function SearchForm() {
  const handleClick = () => {
    axios
      .get("https://xivapi.com/item/1")
      .then((res) => {
        console.log(res.data);
        // props.add(`https://xivapi.com${res.data.Results[0].Icon}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <label>
        Item Search:
        <input placeholder="Search..." />
      </label>
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemPic: state.itemPic,
  };
};

export default connect(mapStateToProps)(SearchForm);
