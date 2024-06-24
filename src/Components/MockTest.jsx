// import { useState } from 'react';
// import questions from '../assets/mocktest.json'; // adjust the path according to your project structure
// import './Mocktest.css';

// const MockTest = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);

//   const handleAnswerOptionClick = (option) => {
//     setSelectedAnswer(option);

//     if (option === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }
//   };

//   const nextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//     } else {
//       setShowScore(true);
//     }
//   };

//   const previousQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedAnswer(null);
//     }
//   };
// const reset = ()=>{
//     setCurrentQuestion(0);
//     setScore(0);
//     setShowScore(false);
//     setSelectedAnswer(null);
// }

//   return (
//     <div className='app'>
//       {showScore ? (
//         <>
//         <div className='score-section'>You scored {score} out of {questions.length}</div>
//         <button onClick={reset} className='reset-btn'>Reset</button>
//         </>
        
//       ) : (
//         <>
//           <div className='question-section'>
//             <div className='question-count'>
//               <span>Question {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div className='question-text'>
//                 <p>{questions[currentQuestion].textenglish}</p>
//             <p>{questions[currentQuestion].texthindi}</p>
//                 </div>
//           </div>
//           <div className='answer-section'>
//             {questions[currentQuestion].options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerOptionClick(option)}
//                 className={
//                   selectedAnswer === option
//                     ? option === questions[currentQuestion].correctAnswer
//                       ? 'green'
//                       : 'red'
//                     : ''
//                 }
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           <div className='navigation-buttons'>
//             <button onClick={previousQuestion} disabled={currentQuestion === 0}>
//               Back
//             </button>
//             <button onClick={nextQuestion}>
//               {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//             </button>
//           </div>
//           <div className="index">
//             {currentQuestion + 1} of {questions.length} questions
//           </div>
//           <div>score: {score}</div>
//         </>
//       )}
//     </div>
//   );
// }

// export default MockTest;

