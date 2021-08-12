import React, { useEffect } from "react";

import Item from "./Item";
import axios from "axios";
import { connect } from "react-redux";
import { search } from "./../actions";

const ItemList = (props) => {
  useEffect(() => {
    axios
      .get("https://xivapi.com/search/?indexes=Item")
      .then((res) => {
        props.search(res.data.Results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {props.item.map((obj) => {
        return <Item data={obj} />;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

export default connect(mapStateToProps, { search })(ItemList);
