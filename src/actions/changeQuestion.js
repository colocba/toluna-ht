const changeQuestion = (question) => {
    return {
        type: 'CHANGE_QUESTION',
        payload: question
    }
}

export default changeQuestion;