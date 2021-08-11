import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { search } from "./../actions";

function SearchForm(props) {
  const handleClick = () => {
    axios
      .get("https://xivapi.com/item/")
      .then((res) => {
        props.search(res.data);
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
    item: state.item,
  };
};

export default connect(mapStateToProps, { search })(SearchForm);
