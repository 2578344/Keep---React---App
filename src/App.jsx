import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import testNotes  from "./TestNotes";
import Note from "./Note";
function GenerateNote(noteItem){
  return <Note key={noteItem.id} title={noteItem.title} content={noteItem.content} />
}


function App() {
  return (
    <div className="Header">
        <Header />
        <CreateNote />
        <div className="note-container">
          {testNotes.map(GenerateNote)}
        </div>
        <Footer />
    </div>
  );
}

export default App;
