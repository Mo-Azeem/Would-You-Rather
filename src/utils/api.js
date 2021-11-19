import { 
    _getUsers,
_getQuestions,
_saveQuestion,
_saveQuestionAnswer,
_saveUser
} from './_DATA'

export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => {
      return {users, questions}  
    })
}

export function saveUser(newUser){
    return _saveUser(newUser); 
}

export function saveQuestion(question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer(answer) {
    return _saveQuestionAnswer(answer)
}