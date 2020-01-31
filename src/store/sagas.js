import { all } from 'redux-saga/effects';
import { getUserTakeLatest } from './getUser/saga'


export default function* rootSaga() {
    yield all([getUserTakeLatest()]);
}