import React, { useEffect } from "react";

import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "./../actions";

const ItemList = (props) => {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {props.item.map((obj) => {
        return <Item data={obj} key={obj.ID} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
    searchedItem: state.item,
  };
};

export default connect(mapStateToProps, { getItems })(ItemList);
