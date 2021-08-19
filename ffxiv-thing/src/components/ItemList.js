import React, { useEffect } from "react";

import Item from "./Item";
import { connect } from "react-redux";
import { getItems } from "./../actions";

const ItemList = (props) => {
  useEffect(() => {
    props.getItems(props.searchedItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchedItem]);

  const exactSearchedItem = props.searchedItem
    .replace('"', "")
    .replace('"', "");

  return (
    <div className="itemList">
      {props.searchedItem.split("")[0] === '"' &&
      props.searchedItem.split("")[props.searchedItem.length - 1] === '"'
        ? props.items
            .filter((obj) => {
              return obj.Name === exactSearchedItem;
            })
            .map((obj) => {
              return <Item data={obj} key={obj.ID} />;
            })
        : props.items.map((obj) => {
            return <Item data={obj} key={obj.ID} />;
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    searchedItem: state.searchedItem,
  };
};

export default connect(mapStateToProps, { getItems })(ItemList);
