import React, { Component } from 'react'
import './App.css';
import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Firebase from 'firebase'

import Logo from './components/Logo';
import QAForms from './components/QAForms';
import fetchAnswers from './actions/fetchAnswers'
import fetchQuestions from './actions/fetchQuestions'
import fbConfig from './config'

class App extends Component {

  constructor(props) {
    super(props);
    Firebase.initializeApp(fbConfig);
  }

  componentDidMount() {
    // Initializing the store with the answerss
    fetch('./data.json')
      .then(res => res.json())
      .then(data => this.updateStore(data))
  }

  updateStore(data) {
    this.props.fetchQuestions(data.question);
    this.props.fetchAnswers(data.answers);
  }

  render() {
    return (
      <div className="App">
        <Container className="out-container">
          <Logo />
          <QAForms />
        </Container>
      </div>
    )
  }
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestions: fetchQuestions, fetchAnswers: fetchAnswers }, dispatch);
}

export default connect(null, matchDispatchToProps)(App)
