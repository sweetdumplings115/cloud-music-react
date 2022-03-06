import {
    CHANGE_CURRENT_SONG,
    CHANGE_CURRENT_SONG_INDEX,
    CHANGE_SONG_LIST,
    CHANGE_SEQUENCE,
    CHANGE_LYRIC_List,
    CHANGE_CURRENT_LYRIC_INDEX,
    CHANGE_Similar_Songs,
    CHANGE_Include_This_Song_List,
    CHANGE_comments,
    CHANGE_Search,
    CHANGE_Search_Suggest,
    CHANGE_Details_Page_Song,
    CHANGE_Details_Page_Lyric_List,
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
   similarSongs:[],
   includeThisSongList:[],
   comments:{},
   searchResult:{},
   searchSuggest:{},
   detailsPageSong:{},
   detailsPagelyricList:[],

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
        case CHANGE_Similar_Songs:
            return state.set("similarSongs",action.similarSongs)
        case CHANGE_Include_This_Song_List:
            return state.set("includeThisSongList",action.includeThisSongList)
        case CHANGE_comments:
            return state.set("comments",action.comments)
        case CHANGE_Search:
            return state.set("searchResult",action.searchResult)
        case CHANGE_Search_Suggest:
            return state.set("searchSuggest",action.searchSuggest)
        case CHANGE_Details_Page_Song:
            return state.set("detailsPageSong",action.detailsPageSong)
        case CHANGE_Details_Page_Lyric_List:
            return state.set("detailsPagelyricList",action.detailsPagelyricList)
        default:
            return state
    }
}

export default reducer;