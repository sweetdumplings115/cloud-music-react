import {
   CHANGE_CURRENT_SONG,
   CHANGE_CURRENT_SONG_INDEX,
   CHANGE_SEQUENCE,
   CHANGE_SONG_LIST,
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

import {
    getRandom,
}from "@/utils/data-change"

import {
    getSongDetail,
    getLyric,
    getIncludeThisSongList,
    getSimilarSongs,
    getcomments,
    getSearch,
    getSearchSuggest,
} from "../../../services/player";

import {
    PlayTheOrder
} from "../../../common/contants"

import {
    parseLyric,
}from "../../../utils/parse-lrc"


const changeCurrentSongAction = (res) => ({
    type:CHANGE_CURRENT_SONG,
    currentSong:res
})



export const getSongDetailAction = (ids) => {
    return (dispatch,getState) => {

        const palyList = getState().getIn(["player","playList"]);
        const songIndex = palyList.findIndex(song => song.id === ids);//查找ids是否在播放列表中

        let song = null;
        if(songIndex !== -1){//如果在
            dispatch(changeCurrentSongIndexAction(songIndex));//修改播放歌曲下标
            song = palyList[songIndex];
            dispatch(changeCurrentSongAction(song));//修改播放歌曲
            dispatch(getLyricAction(ids));//请求歌词
        }else{//如果不在，请求对应歌曲
                getSongDetail(ids).then(res => {
                   song = res && res.songs && res.songs[0];
                    if(!song) return;

                    const newPlayList = [...palyList];
                    newPlayList.push(song);
                    dispatch(changeSongListAction(newPlayList));//加入歌曲列表
                    dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))//修改播放歌曲下标
                    dispatch(changeCurrentSongAction(song));//修改播放歌曲
                    dispatch(getLyricAction(ids));//请求歌词
            })
        }


    }  
}

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            const translationlyric = res.tlyric.lyric;
            const lyricList = parseLyric(lyric,translationlyric);
            dispatch(changeLyricListAction(lyricList));
        })
    }
}


export const changeLyricListAction = (lyricList) => ({
    type:CHANGE_LYRIC_List,
    lyricList
})


 export const addSongListAction = (song) => {
     return (dispatch,getState) => {
         const palyList = getState().getIn(["player","playList"]);
         const ids = song.id;
         const songIndex = palyList.findIndex(ListSong => ListSong.id === ids);//查找ids是否在播放列表中

         if(songIndex !== -1){
             return;
         }else{//如果不在，请求对应歌曲
                const newPlayList = [...palyList];
                newPlayList.push(song);
                dispatch(changeSongListAction(newPlayList));//加入歌曲列表
        }
     }
 }



export const changeSongListAction = (playList) => ({
    type:CHANGE_SONG_LIST,
    playList
})

export const changeCurrentSongIndexAction = (index) => ({
    type:CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex:index
})


export const changeSequenceAction = (sequence) => ({
    type:CHANGE_SEQUENCE,
    sequence
})





export const changePlaySongAction = (tag) => {
    return (dispatch,getState) => {
        const playList = getState().getIn(["player","playList"]);
        const sequence = getState().getIn(["player","sequence"]);
        let currentSongIndex = getState().getIn(["player","currentSongIndex"]);
        const length = playList.length;
        switch(sequence){
            case PlayTheOrder.random:
                let randomIndex  = getRandom(length);
                while(randomIndex === currentSongIndex){
                        randomIndex = getRandom(length);
                    }
                    currentSongIndex = randomIndex;
                 break;
            default:
                currentSongIndex += tag;
                if(currentSongIndex >= length){
                    currentSongIndex = 0;
                }else if(currentSongIndex < 0){
                 currentSongIndex = length - 1;
                }
        }

        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(changeCurrentSongAction(currentSong));
        //请求歌词
        dispatch(getLyricAction(currentSong.id))
    }
}

export const changeCurrentLyricIndexACction = (currentLyricIndex) => ({
    type:CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex
})



const changeSimilarSongsAction = (res) => ({
    type:CHANGE_Similar_Songs,
    similarSongs:res
})

export const getSimilarSongsAction = (id) => {
    return dispatch => {
        getSimilarSongs(id).then(res => {
            // console.log(res.songs);
            dispatch(changeSimilarSongsAction(res.songs));
        })
    }
}


const changeIncludeThisSongListAction = (res) => ({
    type:CHANGE_Include_This_Song_List,
    includeThisSongList:res
})

export const getIncludeThisSongListAction = (id) => {
    return dispatch => {
       getIncludeThisSongList(id).then(res => {
        //    console.log(res.playlists);
           dispatch(changeIncludeThisSongListAction(res.playlists))
       })
    }
}


const changecommentsAction = (res) => ({
    type:CHANGE_comments,
    comments:res
})

export const getcommentsAction = (id) => {
    return dispatch => {
       getcomments(id).then(res => { 
            dispatch(changecommentsAction(res));
       })
    }
}


const changeSearchAction = (res) => ({
    type:CHANGE_Search,
    searchResult:res
})

export const getSearchAction = (keyword) => {
    return dispatch => {
       getSearch(keyword).then(res => { 
            dispatch(changeSearchAction(res));
       })
    }
}

const changeSearchSuggestAction = (res) => ({
    type:CHANGE_Search_Suggest,
    searchSuggest:res
})

export const getSearchSuggestAction = (keyword) => {
    return dispatch => {
       getSearchSuggest(keyword).then(res => {
           console.log("--------------",keyword);
           dispatch(changeSearchSuggestAction(res))
       })
    }
}




const changeDetailsPageSong = (res) => ({
    type:CHANGE_Details_Page_Song,
    detailsPageSong:res,
})



export const getDetailsPageSong = (id) => {
    return dispatch =>  {
        getSongDetail(id).then(res => {
            dispatch(changeDetailsPageSong(res && res.songs[0]));
        })
    }
}


const changeDetailsPagelyricList = (res) => ({
    type:CHANGE_Details_Page_Lyric_List,
    detailsPagelyricList:res
})



export const getDetailsPagelyricList = (id) => {
    return dispatch =>  {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric;
            const translationlyric = res.tlyric.lyric;
            const lyricList = parseLyric(lyric,translationlyric);
            dispatch(changeDetailsPagelyricList(lyricList));
        })
    }
}

