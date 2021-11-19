export const AUTH_USER = 'AUTH_USER'
export const DE_AUTH_USER = 'DE_AUTH_USER'

export function authUser(username){
    return {
        type: AUTH_USER,
        username
    }
}

export function deAuthUser(username){
    return {
        type: DE_AUTH_USER
    }
}