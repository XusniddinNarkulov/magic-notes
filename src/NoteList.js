import React from "react";
import ReactDOM from "react-dom";
import CreateNote from "./CreateNote";
import Note from "./Note";

class NoteList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div className="note-list">
            {this.props.notes.map((val) => (
               <Note
                  key={val.id}
                  id={val.id}
                  text={val.text}
                  date={val.date}
                  handleDeleteNote={this.props.handleDeleteNote}
               />
            ))}
            <CreateNote handleAddNote={this.props.handleAddNote} />
         </div>
      );
   }
}

export default NoteList;
