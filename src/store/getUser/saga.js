import { takeLatest, call, put } from "redux-saga/effects";
import api from '../../services/api';

import { GET_USER_REQUEST, success, failure } from './action';


function* getUser({ userName }) {
    try {
        let { data } = yield call(api.get, `/users/${userName}`);
        if (data) {
            yield put(success(data));
        } else {
            yield put(failure("Usuario não encontrado!"));
        }
    } catch (error) {
        yield put(
            failure("Desculpe, algo não ocorreu como esperado!")
        );
    }
}

export function* getUserTakeLatest() {
    yield takeLatest(GET_USER_REQUEST, getUser)
}