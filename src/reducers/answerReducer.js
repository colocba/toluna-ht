const initialState = {
    filterText: '',
    answers: []
}

const answers = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ANSWERS':
            return Object.assign({}, state, {
                answers: action.payload
            }); 
        case 'FILTER_ANSWERS':
            return Object.assign({}, state, {
                filterText: action.payload
            });
        case 'INSERT_ANSWER':
            return Object.assign({}, state, {
                answers: state.answers.concat(action.payload)
            });
        case 'DELETE_ANSWER':
            return Object.assign({}, state, {
                answers: state.answers.filter(answer => answer.text !== action.payload)
            });
        default:
            return state;
    }
}

export default answers;