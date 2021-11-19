import {AUTH_USER, DE_AUTH_USER} from '../actions/authedUser'

export default function authedUser(state = null, action) {
    switch(action.type) {
        case AUTH_USER:
            return action.username
        case DE_AUTH_USER:
            return null; 
        default:
            return state
    }
}