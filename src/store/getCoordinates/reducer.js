import {
    GET_COORDINATES_REQUEST, GET_COORDINATES_SUCCESS, GET_COORDINATES_FAILURE,
} from './action';

export default (initState = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_COORDINATES_REQUEST:
            return Object.assign({}, { type, isLoading: true }, { payload });
        case GET_COORDINATES_SUCCESS:
            return Object.assign({}, { type, isLoading: false }, { payload });
        case GET_COORDINATES_FAILURE:
            return Object.assign({}, { type, isLoading: false }, { payload });
        default:
            return initState;
    }
}
