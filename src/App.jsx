import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NoteContainer from "./Note-Container";
import CreateNote from "./CreateNote";

function App() {
  return (
    <div className="Header">
        <Header />
        <CreateNote />
        <NoteContainer title="firstNote" content="test"/>
        <Footer />
    </div>
  );
}

export default App;
