
import { useRef, useState } from "react";
import "./Quiz.css";
import quizData from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quizData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  const array_options = [Option1, Option2, Option3, Option4];

  const checkans = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        array_options[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === quizData.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(index + 1);
      setQuestion(quizData[index + 1]);
      setLock(false);
      array_options.forEach((option) => {
        if (option.current) {
          option.current.classList.remove("correct", "wrong");
        }
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(quizData[0]);
    setLock(false);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Mock Test 1</h1>
      <hr />
      {result ? (
        <>
          <h2>
            You Scored {score} out of {quizData.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.engquestion}
          </h2>
          {/* <h2>{question.hindiquestion}</h2> */}
          <ul>
            <li ref={Option1} onClick={(e) => checkans(e, 1)}>
              {question.option1}
            </li>
            <li ref={Option2} onClick={(e) => checkans(e, 2)}>
              {question.option2}
            </li>
            {question.option3 && (
              <li ref={Option3} onClick={(e) => checkans(e, 3)}>
                {question.option3}
              </li>
            )}
            {question.option4 && (
              <li ref={Option4} onClick={(e) => checkans(e, 4)}>
                {question.option4}
              </li>
            )}
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {" "}
            {index + 1} of {quizData.length} questions
          </div>
          <div>score: {score}</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
