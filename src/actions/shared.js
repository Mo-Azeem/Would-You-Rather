import { getInitialData, saveQuestionAnswer as apiSaveQuestionAnswer, saveQuestion as apiSaveQuestion } from "../utils/api";
import { retrieveQuestions, saveQuestionAnswer, saveQuestion } from "./questions";
import { retrieveUsers, updateUserAnswer, updateUserQuestions } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
        dispatch(retrieveUsers(users))
        dispatch(retrieveQuestions(questions))
    })
  };
}
//this method is here because it updates the questions.votes and the users.answer 
export function handleSaveQuestionAnswer(answer) {
  return (dispatch) => {
      return apiSaveQuestionAnswer(answer)
        .then(_answer => {
          dispatch(saveQuestionAnswer(_answer))
          dispatch(updateUserAnswer(_answer))
        })
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    return apiSaveQuestion(question).then((_question) => {
      dispatch(saveQuestion(_question));
      dispatch(updateUserQuestions(_question))
    });
  };
}

