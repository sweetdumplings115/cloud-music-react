// import {combineReducers} from "redux";
 import {combineReducers} from "redux-immutable";//优化了内存浪费问题



import {reducer as recommendReducer} from "../pages/discover/child-pages/recommend/store/index";
import {reducer as playerReducer} from "../pages/player/store/index";

const reducers = combineReducers({
    recommend: recommendReducer,
    player: playerReducer,
});

export default reducers;