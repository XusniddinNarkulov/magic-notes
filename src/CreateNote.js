import React, { Component } from "react";

export default class CreateNote extends Component {
   constructor(props) {
      super(props);

      this.state = { note: "", length: 0 };
   }

   getNote = (e) => {
      this.setState({ note: e.target.value });
   };

   sendNote = (e) => {
      e.preventDefault();
      if (this.state.note.trim().length > 0) {
         this.props.handleAddNote(this.state.note);
      }
      this.state.note = "";
   };

   render() {
      return (
         <div>
            <form
               className="card"
               style={{
                  borderRadius: "10px",
                  backgroundColor: "#00AF73",
                  padding: "4%",
                  height: "40vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
               }}
            >
               <textarea
                  onChange={this.getNote}
                  // maxLength={300}
                  style={{
                     boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
                     backgroundColor: "whitesmoke",
                     border: "0",
                     outline: "none",
                     height: "75%",
                     padding: "3%",
                     borderRadius: "5px",
                     marginBottom: "5%",
                     resize: "none",
                  }}
                  placeholder="write something"
                  value={this.state.note}
               ></textarea>

               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <p>
                     {this.state.length + this.state.note.trim().length} symbols
                  </p>
                  <button
                     onClick={this.sendNote}
                     type="submit"
                     className="save"
                     style={{
                        border: "3px solid green",
                        borderRadius: "15px",
                        padding: "2% 4%",
                        cursor: "pointer",
                     }}
                  >
                     Save
                  </button>
               </div>
            </form>
         </div>
      );
   }
}
