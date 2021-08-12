import React from "react";
import { connect } from "react-redux";

const Item = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>{data.Name}</h3>
      <p>{data.Name_ja}</p>
      <img src={`https://xivapi.com${data.Icon}`} alt="" />
      <p>{data.Description}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps)(Item);
