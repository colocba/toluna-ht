import React, { Component } from 'react'
import AnswerRow from './AnswerRow'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Row from 'react-bootstrap/Row'

import './FormStyle.css'
import './AnswersList.css'
import Container from 'react-bootstrap/Container';

class AnswersList extends Component {

    render() {
        let i = 0;

        return (
            <Row className="list-row">
                <Container className="list-container">
                    {/* This is the list of the answers */}
                    <TransitionGroup>
                        {this.props.ans.map(answer =>
                            <CSSTransition key={i} timeout={500} classNames="item">
                                <div key={i++}>
                                    <hr style={{ borderTop: '2px solid #ccc', marginTop: '0', marginBottom: '0' }}></hr>
                                    <AnswerRow imgUrl={answer.imageURL} text={answer.text} />
                                    {/* If this is the last item in the list, then add a hr in the bottom */}
                                    {i === this.props.ans.length ? <hr style={{ borderTop: '2px solid #ccc', marginTop: '0', marginBottom: '0' }}></hr> : null}
                                    {console.log(i, this.props.ans.length)}
                                </div>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </Container>
            </Row>
        )
    }
}

// Getting the storage state and making it a prop for this component
function mapStateToProps(state) {
    const { answers, filterText } = state.answersObject;
    return {
        ans: answers.filter(answer => answer.text.includes(filterText))
    }
}

export default connect(mapStateToProps, null)(AnswersList)
