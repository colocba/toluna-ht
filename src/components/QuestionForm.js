import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import changeQuestion from '../actions/changeQuestion'

import './FormStyle.css'

class QuestionForm extends Component {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        formValue: ""
    }

    handleChange(e) {
        this.setState({ formValue: e.target.value })
    }

    render() {
        return (
            <Row>
                <Container className="form-out-container">
                    <Row style={{ height: '100%' }}>
                        <Col xl={10} xs={12} style={{ paddingLeft: '0', paddingRight: '0' }} className="form-col-input-text">
                            <textarea placeholder={this.props.question} className="form-input-text" onChange={this.handleChange}></textarea>
                        </Col>
                        <Col xl={2} xs={12} style={{ paddingLeft: '0', paddingRight: '0' }} className="form-col-button">
                            <button onClick={() => this.props.changeQuestion(this.state.formValue)} className="form-button" style={{ backgroundColor: '#c5b3d5' }}>
                                {!this.state.formValue ? 'EDIT' : 'SAVE'}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ changeQuestion: changeQuestion }, dispatch);
}

function mapStateToProps(state) {
    return {
        question: state.question.text
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionForm);
