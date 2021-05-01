import { combineReducers } from "redux";
import searchReducer from "../redux/searchReducer";
import hotelsReducer from "../redux/hotelsReducer";


const rootReducer = combineReducers({
    searchReducer, hotelsReducer

});

export default rootReducer;
