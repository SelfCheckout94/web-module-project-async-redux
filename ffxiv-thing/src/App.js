import "./App.css";

import ItemList from "./components/ItemList";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <SearchForm />
      <ItemList />
    </div>
  );
}

export default App;
