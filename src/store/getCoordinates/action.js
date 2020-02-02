import { message } from 'antd';
export const GET_COORDINATES_REQUEST = 'GET_COORDINATES_REQUEST';
export const GET_COORDINATES_SUCCESS = 'GET_COORDINATES_SUCCESS';
export const GET_COORDINATES_FAILURE = 'GET_COORDINATES_FAILURE';


export default function getReposStarred(userName) {
    return { type: GET_COORDINATES_REQUEST, payload: userName }
}

export function success(payload) {
    return { type: GET_COORDINATES_SUCCESS, payload }
}

export function failure(error) {
    message.error(error);
    return { type: GET_COORDINATES_FAILURE, payload: error }
}