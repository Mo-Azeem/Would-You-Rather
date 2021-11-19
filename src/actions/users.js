import { saveUser } from "../utils/api";

export const RETRIEVE_USERS = "RETRIEVE_USERS";
export const CREATE_USER = "CREATE_USER";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    users,
  };
}

export function createUser(newUser) {
  return {
    type: CREATE_USER,
    newUser,
  };
}

export function updateUserAnswer(answer) {
  return {
    type: UPDATE_USER_ANSWER,
    answer,
  };
}

export function updateUserQuestions(question) {
  return {
    type: UPDATE_USER_QUESTIONS,
    question,
  };
}

export function handleCreateUser(newUser) {
  return (dispatch) => {
    return saveUser(newUser).then((formattedNewUser) => {
      dispatch(createUser(formattedNewUser));
    });
  };
}
