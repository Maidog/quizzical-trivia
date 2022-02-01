import React from "react"
import '../styles/Start.css'


export default function Start(props) {
    return (
            <div  className="Start-content">
                <h1 className="Start-title">Quizzical</h1>
                <p className="Start-description">To test your trivia knowledge, click the button below!</p>
                <button className="Start-button" onClick={props.startQuiz}>Start quiz</button>
            </div>
    )
}