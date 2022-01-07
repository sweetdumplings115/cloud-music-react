import {
    CHANG_BANNER,
    CHANG_HOT_RECOMMEND,
    CHANG_NEW_SONG,
    CHANGG_SONG_RANKING_ACG,
    CHANGG_SONG_RANKING_ELECTRONIC_MUSIC,
    CHANGG_SONG_RANKING_SOAR,
    CHANGG_SONG_RANKING_VIP,
    CHANG_HOT_HOST
}from "./constans.js"; 

import {
    getBnners,
    getHotRecommend,
    getNewSong,
    getSongRanking,
    getHotHost,
} from "@/services/recommend";

import {
    SONG_RANKING_ACG_ID,
    SONG_RANKING_ELECTRONIC_MUSIC_ID,
    SONG_RANKING_SOAR_ID,
    SONG_RANKING_VIP_ID,

} from "../../../../../common/contants"



const  changeBannerAction = (res) => ({
    type: CHANG_BANNER,
    banner: res.banners
});
export const getBannersAction = () => {
    return dispatch => {
        getBnners().then(res => {
            dispatch(changeBannerAction(res));
            // console.log(res);
        })
    }
}


const changeHotRecommendAction = (res) => ({
    type:CHANG_HOT_RECOMMEND,
    hotRecommends: res.result
});
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            // console.log(res);
            dispatch(changeHotRecommendAction(res));
        })
    }
}

const changeNewSongAction = (res) => ({
    type:CHANG_NEW_SONG,
    newSongs:res.albums
});
export const getNewSongAction = (limit) => {
    return dispatch => {
        getNewSong(limit).then(res => {
            dispatch(changeNewSongAction(res));
            // console.log(res.albums);
        })
        
    }
}


const changeSongRankingACGAction = (res) => ({
    type:CHANGG_SONG_RANKING_ACG,
    songRankingAcg:res
})
const changeSongRankingELECTRONICAction = (res) => ({
    type:CHANGG_SONG_RANKING_ELECTRONIC_MUSIC,
    songRankingElectronic:res
})
const changeSongRankingSOARAction = (res) => ({
    type:CHANGG_SONG_RANKING_SOAR,
    songRankingSoar:res
})

const changeSongRankingVIPAction = (res) => ({
    type:CHANGG_SONG_RANKING_VIP,
    songRankingVIP:res
})
export const getSongRankingAction = (rankingId) => {
    return dispatch => {
        getSongRanking(rankingId).then(res => {
            const myPlaylist = ( res && res.playlist) || {};
            switch(rankingId){
                case SONG_RANKING_ACG_ID:
                    dispatch(changeSongRankingACGAction(myPlaylist));
                    break;
                case SONG_RANKING_ELECTRONIC_MUSIC_ID:
                    dispatch(changeSongRankingELECTRONICAction(myPlaylist));
                    break;
                case SONG_RANKING_SOAR_ID:
                    dispatch(changeSongRankingSOARAction(myPlaylist));
                    break;
                case SONG_RANKING_VIP_ID:
                    dispatch(changeSongRankingVIPAction(myPlaylist));
                    break;
                default:
            }
        })
    }
}


const changeHotHostAction = (res) => ({
    type:CHANG_HOT_HOST,
    hothosts:res
    // .data.list
})



export const getHotHostAction = (limit) => {
    return dispatch => {
        getHotHost(limit).then(res => {
            // console.log(res);
            const myRes = (res && res.data) || {list:{}};
            dispatch(changeHotHostAction(myRes.list));
        })
    }
}






