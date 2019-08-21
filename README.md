# Toluna Home Task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## App acrchitecture seperated by components
The following tree shows the structure of the components in the whole app.

- App
  - Logo
  - QAForms
    - QuestionContainer
	  - QuestionImage
	  - Title
	  - QuestionForm
	- AnswerContainer
	  - Title
	  - AnswerForm
	  - AnswersList
	    - AnswerRow (It will be n like this depending on the amount of answers in the array)
	  - AnswerInsertNew
	    - AnswerInsertForm


## Tech stack

1. React
2. React - Bootstrap 4
3. Firebase
4. Redux (react-redux)

##### React-Bootstrap
Was used for handling all the grid on the app

##### Firebase
The firebase storage has been used for uploading the new images when the user wants to add a new answer.
Firebase will return inmediately the URL of the image uploaded and this URL has been saved on the answers array that lives in the Redux store.

##### Redux
The state manager has been used for managing globaly the whole state of the app.
The state contains:
1. **question** object containing a question object with image and text.
2. **answersObject** object containing the filter text and the answers objects array.

## Redux reducers and actions
### Actions:
- **changeQuestion.js**: this action will receive a new question and update the one in the store
- **fetchQuestion.js**: The app will start fetching from the api when App.js didMount(). At this moment, we will update the redux store with this action.
- **fetchAnswer.js**: As explained in fetchQuestion.js
- **insertAnswer.js**: This action will receive a text and an image url and will send send it to the relevant reducer so he inserts the new answer into the answers objects array.
- **searchAnswer.js**: This action will receive a filter word and will pass it to the relevant reducer so it will be saved in the store.
- **deleteAnswer.js**: This action will receive the text of the answer clicked by the user and send it to the reducer for getting a new array without it.

### Reducers:
- **questionReducer.js**: This reducer will receive both *FETCH_QUESTION* and *CHANGE_QUESTION*  actions (among others) and will modify the qustion object in the store depending on the action payload.
- **answerReducer.js**: This reducer will receive *FETCH_ANSWERS*, *FILTER_ANSWERS*, *INSERT_ANSWER* and *DELETE_ANSWER* and will modify the answersObject object in the store depending on the action payload.

## External Api's

- Firebase
- Bootstrap
- react-loader-spinner: For making a spinner when loading updated list.
- react-redux
- redux
- react-transition-group: For making enter and exiting effect for each item on the list.

## Missing parts

Unfortunely, the project has taken more time that I thought, therefore I haven't done the browser local storage part.
I could have accomplished this by:
1. Fetching data in componentDidMount() function in App component from the localStorage with ls.get() to the redux store. 
2. Saving the last snapshot of the store when closing the App with ls.set().

## Time spend

Since we haven't talk anything about time, I have decided to do the best I can and learn all the new challenges gaven in this task.
I have managed to fully understand and learn from scratch the Redux work flow and see the big advantage of it when making large scale apps.
The project has taken me 5 days.

## Device adaptation

The app is adapted for large screen size as well as for mobile screen size.

## Web URL

You will be able to enter the app on the [following url](https://toluna-ht.onrender.com)