import React from 'react'
import '../styles/Quizzes.css'
import blob1 from '../blob1.png';
import blob2 from '../blob2.png';

export default function Quizzes(props) {
    
    return (
        <div>
            <img src={blob1} alt="background pattern1" className="App-blob1"/>
            <div className="Quizzes-container">{props.quizHTML}</div>
            <button className="Quizzes-button">Check Answers</button>
            <img src={blob2} alt="background pattern2" className="App-blob2"/>
        </div>
    )
}