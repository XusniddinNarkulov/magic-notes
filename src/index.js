import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToggleComponent from "./ToggleComponent.js";
import SearchComponent from "./SearchComponent.js";
import NoteList from "./NoteList.js";
import { nanoid } from "nanoid";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         notes: [],
         search: "",
         dark: false,
      };
   }

   addNote = (text) => {
      // console.log(text);
      this.setState({
         notes: [
            ...this.state.notes,
            { id: nanoid(), text: text, date: new Date().toLocaleDateString() },
         ],
      });
   };

   deleteNote = (id) => {
      this.setState({ notes: this.state.notes.filter((val) => val.id !== id) });
   };

   handleSearch = (text) => {
      this.setState({ search: text });
   };

   handleDark = (handle) => {
      this.setState({ dark: handle(this.state.dark) });
   };

   checkStorage = () => {
      const savedNotes = JSON.parse(localStorage.getItem("magicNotes"));
      if (savedNotes) {
         this.setState({ notes: savedNotes });
      }
   };
   componentDidMount() {
      this.checkStorage();
   }
   // componentWillUnmount() {
   //    this.checkStorage();
   // }
   componentDidUpdate(prevProps, prevState) {
      if (prevState.notes !== this.state.notes) {
         localStorage.setItem("magicNotes", JSON.stringify(this.state.notes));
      }
   }

   render() {
      return (
         <div
            className={`${this.state.dark && `dark`}`}
            style={{ minHeight: "100vh", padding: "2%" }}
         >
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
               <ToggleComponent handleDark={this.handleDark} />
            </nav>

            <SearchComponent handleSearch={this.handleSearch} />
            <NoteList
               notes={this.state.notes.filter((val) =>
                  val.text.toLowerCase().includes(this.state.search)
               )}
               handleAddNote={this.addNote}
               handleDeleteNote={this.deleteNote}
            />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector("#root"));
