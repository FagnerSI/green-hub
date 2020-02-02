import { combineReducers } from 'redux';
import getCoordinates from './getCoordinates/reducer';
import getUser from "./getUser/reducer";
import getReposStarred from "./getReposStarred/reducer";

const reducer = combineReducers({
    getCoordinates,
    getUser,
    getReposStarred,
});


export default reducer;