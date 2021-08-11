import React from "react";
import { connect } from "react-redux";

const Item = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.item.Name}</h3>
      <p>{props.item.Name_ja}</p>
      <img src={`https://xivapi.com${props.item.Icon}`} alt="" />
      <p>{props.item.Description}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps)(Item);
