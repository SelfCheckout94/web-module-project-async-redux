import React from "react";
import { connect } from "react-redux";
import { toggleDetails } from "../actions";

const Item = (props) => {
  const { data } = props;

  const handleClick = () => {
    return data.ID === props.toggleDetails();
  };

  return (
    <>
      {/* BUTTON PRESS:
        details hidden ? show details : hide details
      */}
      <div onClick={handleClick}>
        <h3>{data.Name}</h3>
        <img src={`https://xivapi.com${data.Icon}`} alt="" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
    showDetails: state.showDetails,
  };
};

export default connect(mapStateToProps, { toggleDetails })(Item);
