import React, { Component } from "react";

export default class Note extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

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
                  disabled
               >
                  {this.props.text}
               </textarea>

               <div
                  style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                  }}
               >
                  <p>{this.props.date}</p>
                  <b style={{ fontSize: "2rem" }}>🗑</b>
               </div>
            </form>
         </div>
      );
   }
}
