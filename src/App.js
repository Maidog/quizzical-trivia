import blob1 from './blob1.png';
import blob2 from './blob2.png';
import './App.css';
import Start from './components/Start'
import React from 'react'
import Quizzes from './components/Quizzes'
import Quiz from './components/Quiz'

function App() {
  const [quizzes, setQuizzes] = React.useState([])
  const [quizStarted, setQuizStarted] = React.useState("false")
  const [quizHTML, setQuizHTML] = React.useState("")



  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => setQuizzes(data.results))
  }, [quizStarted, quizzes])

  function startQuiz(event) {
    console.log("quiz started!")
    console.log(quizzes)
    setQuizStarted(!quizStarted)
    console.log(quizStarted)
    setQuizHTML(makeQuizElements(quizzes))
  }

  function shuffleAnswers(answers) {
    for(let i = answers.length; 0 < i; i--) {
      let r = Math.floor(Math.random() * (i + 1))
      const temp = answers[i]
      answers[i] = answers[r]
      answers[r] = temp
    }
    return answers
  }

  function makeQuizElements(quizzes) {
    quizzes.map(quiz => {
      let answers = quiz.incorrect_answers.push(quiz.correct_answer)
      shuffleAnswers(answers)
      return (
        <div className="quiz-content">
          <h2>{quiz.question}</h2>
          <div className="quiz-answers">
            <button className="answer">{answers[0]}</button>
            <button className="answer">{answers[2]}</button>
            <button className="answer">{answers[3]}</button>
            <button className="answer">{answers[4]}</button>
            <button className="answer">{answers[5]}</button>
          </div>
        </div>
      )
    })
  }
  

  return (
    <div className="App">
      <img src={blob1} alt="background pattern1" className="App-blob1"/>
        <Quiz quizStarted={quizStarted}/>
        <Start startQuiz={(event) => startQuiz(event)}/>
        {quizStarted === true && <Quizzes makeQuizElements={() => quizHTML }/>}
        <img src={blob2} alt="background pattern2" className="App-blob2"/>
    </div>
  );
}

export default App;
