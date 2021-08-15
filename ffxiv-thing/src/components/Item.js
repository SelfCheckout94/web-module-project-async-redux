import React from "react";
import { connect } from "react-redux";
import { toggleDetails } from "../actions";

const Item = (props) => {
  const { data } = props;

  const handleClick = () => {
    return data.ID === props.toggleDetails();
  };

  return (
    <div className="item">
      {/* BUTTON PRESS:
        details hidden ? show details : hide details
      */}
      <div onClick={handleClick}>
        <img src={`https://xivapi.com${data.Icon}`} alt="" />
        <h4>{data.Name}</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    showDetails: state.showDetails,
  };
};

export default connect(mapStateToProps, { toggleDetails })(Item);
