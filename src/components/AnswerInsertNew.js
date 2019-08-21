import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnswerInsertForm from './AnswerInsertForm';
import './AnswerInsertNew.css'
import Container from 'react-bootstrap/Container';

export default class AnswerInsertNew extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        insertAnswer: false
    }

    toggle() {
        this.setState({ insertAnswer: !this.state.insertAnswer })
    }

    render() {
        return (
            <Row>
                <Container style={{marginTop: 53, marginBottom: 53}} className="form-insert-new-out-container">
                    {!this.state.insertAnswer ?
                        <Col className="align-self-center" xs={12} xl={12}>
                            <i onClick={this.toggle} className="material-icons add-icon">add_circle_outline</i>
                        </Col>
                        :
                        <AnswerInsertForm toggleToInsertButton={this.toggle} />
                    }
                </Container>
            </Row>
        )
    }
}

