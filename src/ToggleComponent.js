import React from "react";
import ReactDOM from "react-dom";

class ToggleComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <button
            onClick={() => this.props.handleDark((prevMode) => !prevMode)}
            className="toggle"
            style={{
               backgroundColor: "whitesmoke",
               border: "2px solid green",
               borderRadius: "40px",
               padding: "1%",
               cursor: "pointer",
            }}
         >
            Toggle Mode
         </button>
      );
   }
}

export default ToggleComponent;
