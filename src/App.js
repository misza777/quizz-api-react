import "./App.css";
import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";

function App() {
  const [start, setStart] = useState(false);

  return (
    <main>
      {start ? (
        <QuestionForm />
      ) : (
        <div className="no-notes">
          <h1>Quizzical</h1>
          <h4>Let's have fun with small quizz!</h4>
          {/* <label htmlFor="number">If You want to play with more than 10 questins, select number of questions please!</label>
          <input 
                    type="number"
                    id="number"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                /> */}
          <button
            className="first-note"
            onClick={() => {
              setStart((prevStart) => !prevStart);
            }}
          >
            Start quizz now!
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
