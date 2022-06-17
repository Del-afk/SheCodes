import react from "react";
import reactDom from "react-Dom";
import Searchbar from "./components/searchbar";

import "./style.css";

function App() {
  return (
    <div className="App">
      <Searchbar />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, world!</h1>);
