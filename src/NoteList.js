import React from "react";
import ReactDOM from "react-dom";
import Note from "./Note";

class NoteList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
      console.log(props);
   }

   render() {
      return (
         <div className="note-list">
            {this.props.notes.map((val) => (
               <Note key={val.id} id={val.id} text={val.text} date={val.date} />
            ))}
         </div>
      );
   }
}

export default NoteList;
