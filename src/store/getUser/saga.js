import { takeLatest, call, put } from "redux-saga/effects";
import api from '../../services/api';

import { GET_USER_REQUEST, success, failure } from './action';


function* getUser({ payload }) {
    try {
        let { data } = yield call(api().get, `/users/${payload}`);
        yield put(success(data));
    } catch (error) {
        yield put(failure("Usuario não encontrado!"));
    }
}

export function* getUserTakeLatest() {
    yield takeLatest(GET_USER_REQUEST, getUser)
}