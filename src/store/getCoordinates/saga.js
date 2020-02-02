import { takeLatest, call, put } from "redux-saga/effects";
import api from '../../services/api';
import { KEY_GOOGLE, MAPS_API } from '../../common/constants';

import { GET_COORDINATES_REQUEST, success, failure } from './action';

function* getReposStarred({ payload }) {
    try {
        let { data } = yield call(api(MAPS_API).get, `/geocode/json?address=${payload}&key=${KEY_GOOGLE}`);
        yield put(success(data));
    } catch (error) {
        yield put(failure("Não foi possivél encontrar sua localização"));
    }
}

export function* getCoordinatesTakeLatest() {
    yield takeLatest(GET_COORDINATES_REQUEST, getReposStarred)
}