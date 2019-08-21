import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import './AnswerInsertForm.css'
import Firebase from 'firebase'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import insertAnswer from '../actions/insertAnswer'

class AnswerInsertForm extends Component {

    constructor(props) {
        super(props);
        this.saveNewAnswer = this.saveNewAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        imageAsString: '',
        fileText: '',
        fileName: '',
        isLoading: false
    }

    // This function will push the image into the firebase storage and bring back the url
    saveNewAnswer() {
        if (!this.inputsAreEntered()) {
            return;
        }
        this.setState({ isLoading: true });
        Firebase.storage().ref('answerImages/' + this.state.fileName).putString(this.state.imageAsString, 'base64')
            .then(snapshot => {
                snapshot.ref.getDownloadURL()
                    .then(downloadURL => {
                        // Save dispatching a new answer object
                        this.props.insertAnswer(this.state.fileText, downloadURL);
                        this.setState({ isLoading: false });
                        this.props.toggleToInsertButton();
                    })
            })
    }

    // Function for checking that the file and the text has been inserted
    inputsAreEntered() {
        if (this.state.imageAsString === '' || this.state.fileText === '') {
            alert("You are missing a picture or the text!");
            return false;
        }
        return true;
    }

    handleChange(e) {
        console.log(e.target.type);
        switch (e.target.type) {
            case 'file':
                this.saveFileAsStringInState(e.target);
                break;
            case 'textarea':
                this.saveTextFromInput(e.target.value);
                break;
            default:
                console.log("ERROR");
        }
    }

    // Function that saves the file string in the state for uploading it to firebase later
    saveFileAsStringInState(target) {
        let files = target.files;
        let reader = new FileReader();
        this.setState({ fileName: files[0].name })
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            this.setState({
                imageAsString: e.target.result.replace("data:image/jpeg;base64,", "")
            })
        }
    }

    // Function that saves the text answer in the state
    saveTextFromInput(text) {
        this.setState({
            fileText: text
        })
    }

    render() {
        return (
            <div>
                {!this.state.isLoading ?
                    <Row className="outer-row-container">
                        <Col className="input-file-col" xs={6} xl={6}>
                            {/* File input for uploading an image */}
                            <input id="file" type="file" name="file" className="input-file" onChange={this.handleChange}></input>
                        </Col>
                        <Col className="input-text-col" xs={6} xl={4}>
                            <textarea placeholder="Answer text..." className="input-text" onChange={this.handleChange}></textarea>

                        </Col>
                        <Col className="button-col" xs={12} xl={2}>
                            <button onClick={this.saveNewAnswer} className="save-button">
                                SAVE
                            </button>
                        </Col>
                    </Row>
                    :
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={64}
                        width={64}
                    />
                }
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ insertAnswer: insertAnswer }, dispatch);
}

export default connect(null, matchDispatchToProps)(AnswerInsertForm);
