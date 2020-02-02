import {
    GET_REPOS_STARRED_REQUEST, GET_REPOS_STARRED_SUCCESS, GET_REPOS_STARRED_FAILURE,
} from './action';

export default (initState = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_REPOS_STARRED_REQUEST:
            return Object.assign({}, { type, isLoading: true }, { payload });
        case GET_REPOS_STARRED_SUCCESS:
            return Object.assign({}, { type, isLoading: false }, { payload });
        case GET_REPOS_STARRED_FAILURE:
            return Object.assign({}, { type, isLoading: false }, { payload });
        default:
            return initState;
    }
}
