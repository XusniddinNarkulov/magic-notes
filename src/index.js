import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToggleComponent from "./ToggleComponent.js";
import SearchComponent from "./SearchComponent.js";
import NoteList from "./NoteList.js";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         notes: [
            { id: 11, text: "first note", date: "15/10/2021" },
            { id: 12, text: "second note", date: "16/10/2021" },
            { id: 13, text: "first note", date: "15/10/2021" },
            { id: 14, text: "second note", date: "16/10/2021" },
         ],
      };
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
            <NoteList notes={this.state.notes} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
