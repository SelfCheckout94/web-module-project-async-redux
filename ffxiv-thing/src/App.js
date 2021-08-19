import "./App.css";

import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <SearchForm />
      {props.searchedItem !== "" ? (
        <h1 className="searchResults">
          Showing search result(s) for:{" "}
          {props.searchedItem.includes('"')
            ? props.searchedItem.replace('"', "").replace('"', "")
            : props.searchedItem}
        </h1>
      ) : null}
      <ItemList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchedItem: state.searchedItem,
  };
};

export default connect(mapStateToProps)(App);
