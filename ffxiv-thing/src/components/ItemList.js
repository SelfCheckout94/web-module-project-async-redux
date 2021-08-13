import React, { useEffect } from "react";
import { getItems, grabItem } from "./../actions";

import Item from "./Item";
import axios from "axios";
import { connect } from "react-redux";

const ItemList = (props) => {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://xivapi.com/search/?string=${props.searchedItem}&indexes=Item`
      )
      .then((res) => {
        props.grabItem(res.data.Results);
      })
      .catch((err) => console.log(err));
  }, [props.searchedItem]);

  return (
    <>
      {props.items.map((obj) => {
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

export default connect(mapStateToProps, { getItems, grabItem })(ItemList);
