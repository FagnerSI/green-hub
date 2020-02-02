import { takeLatest, call, put } from "redux-saga/effects";
import api from '../../services/api';

import { GET_REPOS_STARRED_REQUEST, success, failure } from './action';


function* getReposStarred({ payload }) {
    try {
        let { data } = yield call(api().get, `/users/${payload}/starred`);
        yield put(success(data));
    } catch (error) {
        yield put(failure("Sem repositórios com estrela!"));
    }
}

export function* getReposStarredTakeLatest() {
    yield takeLatest(GET_REPOS_STARRED_REQUEST, getReposStarred)
}