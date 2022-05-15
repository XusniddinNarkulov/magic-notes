import React, { Component } from "react";

export default class CreateNote extends Component {
   constructor(props) {
      super(props);

      this.state = { note: "" };
   }

   getNote = (e) => {
      this.setState({ note: e.target.value });
      console.log(this.state.note);
   };

   sendNote = (note) => {
      return note;
   };

   render() {
      return (
         <div>
            <form
               className="card"
               style={{
                  borderRadius: "10px",
                  backgroundColor: "whitesmoke",
                  padding: "4%",
                  height: "40vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
               }}
            >
               <textarea
                  onChange={this.getNote}
                  maxLength="300"
                  style={{
                     boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
                     backgroundColor: "#00AF73",
                     border: "0",
                     outline: "none",
                     height: "75%",
                     padding: "3%",
                     borderRadius: "5px",
                     marginBottom: "5%",
                     resize: "none",
                  }}
                  placeholder="write something"
               ></textarea>

               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <p>300 remaining</p>
                  <button
                     onClick={this.sendNote(this.state.note)}
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
