const fetchQuestions = (question) => {
    return {
        type: 'FETCH_QUESTION',
        payload: question
    }
}

export default fetchQuestions;