import blob1 from './blob1.png';
import blob2 from './blob2.png';
import './App.css';
import React from 'react'
import _ from 'lodash';
import Quiz from './components/Quiz'
import Start from './components/Start'
import Quizzes from './components/Quizzes'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {nanoid} from 'nanoid'

function App2() {
  const [quiz, setQuiz] = React.useState([])
  let quizStarted = false
  let quizData = []
  let quizHTML = ""

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => {
        quizData = data.results
        console.log("fetch: " + quizData)
      }
    )
  })

  function makeQuiz(quizData) {
    let quiz = quizData.map(function quizDatum(quizDatum) {
      let allAnswers = quizDatum.incorrect_answers.concat([quizDatum.correct_answer])
      allAnswers = shuffleAnswers(allAnswers)
      //console.log("makeQuiz.answers "+allAnswers)
      //console.log("makequiz.question: " +quizDatum.question)
      return {
        allAnswers: allAnswers,
        question: quizDatum.question
        }
      }
    )
    console.log("makeQuiz2: "+quiz)
      return quiz
  }


  function shuffleAnswers(answers) {
    //console.log("before: "+answers)
    console.table(answers)

    answers = _.shuffle(answers)
    console.table(answers)
     return answers
    
     console.log("shuffled" + answers)
    let currentIndex = answers.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      [answers[currentIndex], answers[randomIndex]] = [
        answers[randomIndex], answers[currentIndex]]
    }
    return answers
  }

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  function makeQuizElements(quiz) {
    console.log("before/makehtml: "+quizHTML)
      quizHTML = quiz.map((quizEle) => {
        {
          const question = quizEle.question
          const ansArray = quizEle.allAnswers
          let answersEle = []

          for(let i= 0; i < ansArray.length; i++){
            answersEle.push(<button className="Quiz-answer" key={nanoid()}>{htmlDecode(ansArray[i])}</button>)
        }
        console.log("before/makehtml/answersEle: "+answersEle)
        console.log("before/makehtml/question: "+quizEle.question)
                  
                  {/* <button className="answer">{quizEle.allAnswers[0]}</button>
                  <button className="answer">{quizEle.allAnswers[1]}</button>
                  <button className="answer">{quizEle.allAnswers[2]}</button>
                  <button className="answer">{quizEle.allAnswers[3]}</button>
                <button className="answer">{quizEle.allAnswers[4]}</button> */}
                return  <div className="Quizzes-content" key={nanoid()}>
                          <h2 className="Quizzes-question">{htmlDecode(question)}</h2>
                          <div className="Quizzes-answers">
                            {answersEle}
                          </div>
                        </div>
          }
        }
      ) 
      console.log("after/makehtml: "+quizHTML) 
      return quizHTML
    }

  function startQuiz() {
    console.log("quiz started")
    quizStarted = true
    const quiz = makeQuiz(quizData)
    //console.log("startQuiz.quiz: " + quiz)
    quizHTML = makeQuizElements(quiz)
    console.log("startQuiz.html: "+ quizHTML)
  }
  

  return (
    //<div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ () => <Start startQuiz={startQuiz}/>} />
            <Route exat path="/quizPage" render={ () => <Quizzes quizHTML={quizHTML}/>} />
        </Switch>
      </BrowserRouter>
    //</div>
  );
}

export default App2;
