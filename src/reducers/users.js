import { RETRIEVE_USERS, CREATE_USER, UPDATE_USER_ANSWER, UPDATE_USER_QUESTIONS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_USERS:
      return { ...state, ...action.users };
    case CREATE_USER:
      return {...state, ...action.newUser}
    case UPDATE_USER_ANSWER:
      return {
        ...state,
        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
            ...state[action.answer.authedUser].answers,
            [action.answer.id] : action.answer.answer
          }
        }
      }
    case UPDATE_USER_QUESTIONS: 
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default:
      return state;
  }
}

