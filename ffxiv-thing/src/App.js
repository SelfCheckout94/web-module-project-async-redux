import "./App.css";

import { add } from "./actions";
import axios from "axios";
import { connect } from "react-redux";

function App(props) {
  const handleClick = () => {
    axios
      .get("https://xivapi.com/item")
      .then((res) => {
        console.log(res.data.Results[0].Icon);
        props.add(`https://xivapi.com${res.data.Results[0].Icon}`);
      })
      .catch((err) => console.log(err));
  };

  console.log(props.gilPic);
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <br />
      {props.gilPic !== null ? (
        <img src={props.gilPic} alt="gil" />
      ) : (
        <div></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    gilPic: state.gilPic,
  };
};

export default connect(mapStateToProps, { add })(App);
