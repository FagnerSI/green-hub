import { message } from 'antd';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';


export default function getUser(userName) {
    return { type: GET_USER_REQUEST, payload: userName }
}

export function success(user) {
    localStorage.setItem('@UserLogged', user.login)
    return { type: GET_USER_SUCCESS, payload: user }
}

export function failure(error) {
    message.error(error);
    return { type: GET_USER_FAILURE, payload: error }
}