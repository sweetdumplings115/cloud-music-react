import React,{memo}from "react";
import { useEffect } from "react";


import {PlayListWrapper} from "./style";

import {getIncludeThisSongListAction} from "../../store/index";
import { shallowEqual, useDispatch } from "react-redux";

import SongsFCover from "../../../../components/songs-f-cover"
import { useSelector } from "react-redux";

function PlayList(props) {
    const dispatch = useDispatch();

    const { detailsPageSongId } = props;//进入详情页歌曲的id



    const {songList,songId} = useSelector((state) => ({
        songList:state.getIn(["player","includeThisSongList"]),
        songId:  detailsPageSongId ? detailsPageSongId : state.getIn(["player","currentSong","id"])
    }),shallowEqual);

      useEffect(() => {
        dispatch(getIncludeThisSongListAction(songId))
    },[dispatch,songId]);
    return (
        <PlayListWrapper>
           <p>包含这首歌的歌单</p>
           <ul>
               {
                 songList &&     songList.map(item => {
                       return (
                           <li key={item.id}>
                               <SongsFCover id={item.id} size={50} picUrl={item.coverImgUrl} name={item.name} provenance={item.creator.nickname}/>
                           </li>
                       )
                   })
               }
           </ul>
            
        </PlayListWrapper>
    )
}

export default memo(PlayList);