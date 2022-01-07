import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_SONG_LIST,
    CHANGE_SEQUENCE,
    CHANGE_LYRIC_List,
    CHANGE_CURRENT_LYRIC_INDEX,
}from "./constans.js";

import {Map} from "immutable";

import {PlayTheOrder}  from "../../../common/contants";

const initState = Map({
   currentSong:{},
   playList:[],
   currentSongIndex:0,
   sequence:PlayTheOrder.order,//0 :顺序,1:随机，2：单曲循环
   lyricList:[],
   currentLyricIndex:0,
});


function reducer(state = initState,action){
    switch(action.type){
        case CHANGE_CURRENT_SONG:
            return state.set("currentSong",action.currentSong)
        case CHANGE_SONG_LIST:
            return state.set("playList",action.playList)
        case CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex",action.currentSongIndex)
        case CHANGE_SEQUENCE:
            return state.set("sequence",action.sequence)
        case CHANGE_LYRIC_List:
            return state.set("lyricList",action.lyricList)
        case CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex",action.currentLyricIndex)
        default:
            return state
    }
}

export default reducer;