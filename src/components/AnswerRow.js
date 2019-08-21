import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './AnswerRow.css'
import deleteAnswer from '../actions/deleteAnswer'
import Container from 'react-bootstrap/Container';

class AnswerRow extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.deleteAnswer(this.props.text);
    }

    render() {
        return (
            <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row className="answer-row">
                    <Col className="align-self-center" xs={3} xl={3}>
                        {/* <Image src={this.props.imgUrl} className="answer-img float-right" roundedCircle></Image> */}
                        <div className="answer-img float-right">
                            <Image src={this.props.imgUrl} style={{width: '100%', height: '100%'}} roundedCircle></Image>
                        </div>
                    </Col>
                    <Col className="align-self-center" xs={6} xl={6}>
                        {/* <label className="answer-text float-left">{this.props.text}</label> */}
                        <div className="answer-text float-left">
                            <label style={{width: '100%', height: '100%'}}>{this.props.text}</label>
                        </div>
                    </Col>
                    <Col className="align-self-center" xs={3} xl={3}>
                        <i onClick={this.handleClick} className="material-icons minus-icon">remove_circle_outline</i>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ deleteAnswer: deleteAnswer }, dispatch);
}

export default connect(null, matchDispatchToProps)(AnswerRow);

