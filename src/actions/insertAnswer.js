const insertAnswer = (textAnswer, imgUrl) => {
    return {
        type: 'INSERT_ANSWER',
        payload: {
            text: textAnswer,
            imageURL: imgUrl
        }
    }
}

export default insertAnswer;