import answers from './answerReducer';
import question from './questionReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    question: question,
    answersObject: answers
})

export default allReducers;