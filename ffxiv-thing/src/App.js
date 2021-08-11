import "./App.css";

import { add } from "./actions";
import axios from "axios";
import { connect } from "react-redux";

function App(props) {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const randomIndex = randomNumber();
  console.log(randomIndex);

  const handleClick = () => {
    axios
      .get("https://xivapi.com/item")
      .then((res) => {
        console.log(res.data);
        props.add(`https://xivapi.com${res.data.Results[randomIndex].Icon}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <br />
      {props.itemPic !== null ? (
        <img src={props.itemPic} alt="random ffxiv thing" />
      ) : (
        <div></div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemPic: state.itemPic,
  };
};

export default connect(mapStateToProps, { add })(App);
