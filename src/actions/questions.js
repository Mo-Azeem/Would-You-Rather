export const RETRIEVE_QUESTIONS = "RETRIEVE_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function retrieveQuestions(questions) {
  return {
    type: RETRIEVE_QUESTIONS,
    questions,
  };
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

export function saveQuestionAnswer(answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    answer,
  };
}
