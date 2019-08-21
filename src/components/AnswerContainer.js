import React, { Component } from 'react'

import Title from './Title'
import AnswerForm from './AnswerForm'
import AnswersList from './AnswersList'
import AnswerInsertNew from './AnswerInsertNew'

export default class AnswerContainer extends Component {
    render() {
        return (
            <div style={{marginTop: 25}}>
                <Title text="Answers" />
                <AnswerForm />
                <AnswersList />
                <AnswerInsertNew />
            </div>
        )
    }
}
