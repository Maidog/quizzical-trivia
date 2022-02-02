import React from "react"
import '../styles/Start.css'
import {withRouter} from 'react-router-dom'
import blob1 from '../blob1.png';
import blob2 from '../blob2.png';

function Start(props) {
    function start() {
        props.startQuiz()
        handleToQuizPage()
    }
    function handleToQuizPage() {
        props.history.push('/quizPage')
    }
    return (
        <div className="Start-page">
            <img src={blob1} alt="background pattern1" className="App-blob1"/>
            <div  className="Start-content">
                <h1 className="Start-title">Quizzical</h1>
                <p className="Start-description">To test your trivia knowledge, click the button below!</p>
                <button className="Start-button" 
                    onClick={start}>
                    Start quiz
                </button>
            </div>
        <img src={blob2} alt="background pattern2" className="App-blob2"/>
        </div>
        
    )
}

export default withRouter(Start)