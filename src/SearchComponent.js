import React from "react";
import ReactDOM from "react-dom";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        placeholder="🔍 Search for your notes..."
        style={{
          padding: "2%",
          border: "5px solid green",
          borderRadius: "10px",
          display: "block",
          marginTop: "2%",
          width: "95%",
          backgroundColor: "whitesmoke",
        }}
      />
    );
  }
}

export default SearchComponent;
