import {
    CHANG_BANNER,
    CHANG_HOT_RECOMMEND,
    CHANG_NEW_SONG,
    CHANGG_SONG_RANKING_ACG,
    CHANGG_SONG_RANKING_SOAR,
    CHANGG_SONG_RANKING_ELECTRONIC_MUSIC,
    CHANGG_SONG_RANKING_VIP,
    CHANG_HOT_HOST,
}from "./constans.js";

import {Map} from "immutable";//优化{...state,banner:action.banner}及浅拷贝过于浪费空间的问题
import "../../../../../解释/解决数据不可变引起的内存浪费(即拷贝).PNG";
import "../../../../../解释/ImutableJS_API.PNG";


const initState = Map({
    banner:[],
    hotRecommends:[],
    newSongs:[],
    
    songRankingAcg:{},
    songRankingSoar:{},
    songRankingElectronic:{},
    songRankingVIP:{},

    hothosts:[]
});

function reducer(state = initState,action){
    switch(action.type){
        case CHANG_BANNER:
            // return {...state,banner:action.banner}
            return state.set("banner",action.banner)
        case CHANG_HOT_RECOMMEND:
            return state.set("hotRecommends",action.hotRecommends)    
        case CHANG_NEW_SONG:
            return state.set("newSongs",action.newSongs)
        case CHANGG_SONG_RANKING_ACG:
            return state.set("songRankingAcg",action.songRankingAcg)
        case CHANGG_SONG_RANKING_ELECTRONIC_MUSIC:
            return state.set("songRankingElectronic",action.songRankingElectronic)
        case CHANGG_SONG_RANKING_SOAR:
            return state.set("songRankingSoar",action.songRankingSoar)
        case CHANGG_SONG_RANKING_VIP:
            return state.set("songRankingVIP",action.songRankingVIP)
        case CHANG_HOT_HOST:
            return state.set("hothosts",action.hothosts)
        default:
            return state
    }
}

export default reducer;