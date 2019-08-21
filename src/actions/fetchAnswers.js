const fetchAnswers = (answers) => {
    return {
        type: 'FETCH_ANSWERS',
        payload: answers
    }
}

export default fetchAnswers;