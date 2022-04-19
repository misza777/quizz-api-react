import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  //state
  const [questions, setQuestions] = useState([]);

  const createNewQuestions = () => {};

  return (
    <main>
      {questions.length > 0 ? (
        {
          /* <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split> */
        }
      ) : (
        <div className="no-notes">
          <h1>Quizzical</h1>
          <h4>Let's have fun with small quizz!</h4>
          <button className="first-note" onClick={createNewQuestions}>
            Start quizz now!
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
