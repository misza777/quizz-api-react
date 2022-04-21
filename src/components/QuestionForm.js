import React, { useState, useEffect } from "react";
// import Question from ".Question";

const QuestionForm = () => {
  //state
  const [questions, setQuestions] = useState([]);

  const apiURL = "https://opentdb.com/api.php?amount=10";

  useEffect(() => {
    fetch(`${apiURL}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  console.log(questions);

  return <div>QuestionForm</div>;
};

export default QuestionForm;
