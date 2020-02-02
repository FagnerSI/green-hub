import { all } from 'redux-saga/effects';
import { getCoordinatesTakeLatest } from './getCoordinates/saga';
import { getUserTakeLatest } from './getUser/saga';
import { getReposStarredTakeLatest } from './getReposStarred/saga';


export default function* rootSaga() {
    yield all([
        getUserTakeLatest(),
        getReposStarredTakeLatest(),
        getCoordinatesTakeLatest(),
    ]);
}