import {
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE,
} from './action';

export default (initState = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_REQUEST:
            return Object.assign({}, initState, { isLoading: true }, {});
        case GET_USER_SUCCESS:
            return Object.assign({}, initState, { isLoading: false }, { payload });
        case GET_USER_FAILURE:
            return Object.assign({}, initState, { isLoading: false }, { payload });
        default:
            return initState;
    }
}
