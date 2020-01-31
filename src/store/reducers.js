import { combineReducers } from 'redux'
import getUser from "./getUser/reducer";

const reducer = combineReducers({
    getUser
});


export default reducer;