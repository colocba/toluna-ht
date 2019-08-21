import React from 'react'
import QuestionContainer from './QuestionContainer';
import AnswerContainer from './AnswerContainer';
import Container from 'react-bootstrap/Container';

export default function QAForms() {
    return (
        <Container>
            <QuestionContainer/>
            <AnswerContainer/>
        </Container>
    )
}
