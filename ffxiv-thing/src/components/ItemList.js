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
  console.log(exactSearchedItem);

  return (
    <>
      {/* string contains "" ? filter everything but exact match : don't filter */}
      {props.searchedItem.split("")[0] &&
      props.searchedItem.split("")[props.searchedItem.length - 1] === '"'
        ? props.items
            .filter((obj) => {
              return obj.Name === exactSearchedItem;
              // return props.searchedTerm.replace('"', "") === obj.Name;
              // const newProps = props.searchedTerm.replace('"', "");
              // return obj.Name === newProps;
            })
            .map((obj) => {
              console.log(obj.Name);
              return <Item data={obj} key={obj.ID} />;
            })
        : props.items.map((obj) => {
            return <Item data={obj} key={obj.ID} />;
          })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    searchedItem: state.searchedItem,
  };
};

export default connect(mapStateToProps, { getItems })(ItemList);
