import React from 'react'
import Start from './Start'
import Quizzes from './Quizzes'

export default function Quiz(props) {
    if(props.quizStarted) {
        return <Quizzes quizHTML={props.quizHTML} />
    }
    else{
        return <Start startQuiz={props.startQuiz} />
    }
}