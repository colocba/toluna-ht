const initialState = {
      "text":"",
      "imageURL":""
}

const question = (state = initialState.text, action) => {
    switch (action.type) {
        case 'FETCH_QUESTION':
            return action.payload;
        case 'CHANGE_QUESTION':
            return Object.assign({}, state, {
                text: action.payload
            }); 
        default:
            return state;
    }
}

export default question;