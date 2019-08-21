import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import './QuestionImage.css'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

class QuestionImage extends Component {

    render() {
        return (
            <Row>
                <Container>
                    <Image src={this.props.questionImage} className="question-img" roundedCircle></Image>
                </Container>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionImage: state.question.imageURL
    }
}

export default connect(mapStateToProps, null)(QuestionImage)
