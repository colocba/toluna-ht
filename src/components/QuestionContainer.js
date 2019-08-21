import React from 'react'

import QuestionImage from './QuestionImage'
import QuestionForm from './QuestionForm'
import Title from './Title';

export default function QuestionContainer() {
    return (
        <div>
            <QuestionImage/>
            <Title text="Question" />
            <QuestionForm/>
        </div>
        
    )
}
