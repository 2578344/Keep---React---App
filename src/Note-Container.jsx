import React from "react";
import Note from "./Note";

function NoteContainer(props){
    return (
        <div className="note-container">
            <Note title={props.title} content={props.content} />
        </div>
    )
}

export default NoteContainer;