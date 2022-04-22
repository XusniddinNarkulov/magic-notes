import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToggleComponent from "./ToggleComponent.js";
import SearchComponent from "./SearchComponent.js";
import CardsComponent from "./CardsComponent.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>
            <b style={{ color: "#00AF73" }}>Magic</b> Notes
          </h1>
          <ToggleComponent />
        </nav>

        <SearchComponent />
        <CardsComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
