import { message } from 'antd';
export const GET_REPOS_STARRED_REQUEST = 'GET_REPOS_STARRED_REQUEST';
export const GET_REPOS_STARRED_SUCCESS = 'GET_REPOS_STARRED_SUCCESS';
export const GET_REPOS_STARRED_FAILURE = 'GET_REPOS_STARRED_FAILURE';


export default function getReposStarred(userName) {
    return { type: GET_REPOS_STARRED_REQUEST, payload: userName }
}

export function success(payload) {
    return { type: GET_REPOS_STARRED_SUCCESS, payload }
}

export function failure(error) {
    message.error(error);
    return { type: GET_REPOS_STARRED_FAILURE, payload: error }
}