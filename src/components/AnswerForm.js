import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './FormStyle.css'
import searchAnswer from '../actions/searchAnswers'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class AnswerForm extends Component {

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
                            <textarea placeholder="Search answers" className="form-input-text" onChange={this.handleChange}></textarea>
                        </Col>
                        <Col xl={2} xs={12} style={{ paddingLeft: '0', paddingRight: '0' }} className="form-col-button">
                            <button onClick={() => this.props.searchAnswer(this.state.formValue)} style={{ backgroundColor: '#d6db4b' }} className="form-button">
                                SEARCH
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Row>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchAnswer: searchAnswer }, dispatch);
}

export default connect(null, matchDispatchToProps)(AnswerForm);



