import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import testNotes from "./TestNotes";
import Note from "./Note";



function App() {
  return (
    <div className="Header">
      <Header />
      <CreateNote />
      <div className="note-container">
        {testNotes.map(noteItem =>
          <Note key={noteItem.id} title={noteItem.title} content={noteItem.content} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
