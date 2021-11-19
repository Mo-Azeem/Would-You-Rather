import {
  RETRIEVE_QUESTIONS,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_QUESTIONS:
      return { ...state, ...action.questions };
    case SAVE_QUESTION :
      const question = action.question
      return {
        ...state, 
        [question.id] : question 
      }
    case SAVE_QUESTION_ANSWER:
    const answer = action.answer  
    return {
        ...state,
        [answer.id]: {
          ...state[answer.id],
          optionOne: {
            ...answer.optionOne
          },
          optionTwo: {
            ...answer.optionTwo
          }
        }
      }
    default:
      return state;
  }
}
