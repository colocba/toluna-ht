const searchAnswer = (filterWord) => {
    return {
        type: 'FILTER_ANSWERS',
        payload: filterWord
    }
}

export default searchAnswer;