const deleteAnswer = (textAnswer) => {
    return {
        type: 'DELETE_ANSWER',
        payload: textAnswer
    }
}

export default deleteAnswer;