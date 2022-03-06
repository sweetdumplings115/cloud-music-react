import React,{memo}from "react";

import {SimilarSongsWrapper} from "./style";


import {getSimilarSongsAction} from "../../store/index";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function SimilarSongs(props) {
    const dispatch = useDispatch();

    const { detailsPageSongId } = props;//进入详情页歌曲的id

    const {similarSongs,songId} = useSelector((state) => ({
        similarSongs:state.getIn(["player","similarSongs"]),
        songId:detailsPageSongId ? detailsPageSongId  : state.getIn(["player","currentSong","id"]),
    }))

    useEffect(() => {
        dispatch(getSimilarSongsAction(songId));
    },[dispatch,songId]);

    return (
        <SimilarSongsWrapper>
            <p className="Similar-p">相似歌曲</p>
            <ul>
                {
                 similarSongs &&   similarSongs.map(item => {
                        return (
                            <li className="li" key={item.album.id}>
                                <div className="text">
                                    <p >{item.album.name}</p>
                                    <p className="name">{item.album.company}</p>
                                </div>
                                <div className="icon">
                                    <a href="/#" className="sprite_icon3  s-a-1">播放</a>
                                    <a href="/#" className="sprite_icon3  s-a-2">添加</a> 
                                </div>
                            </li>
                           
                        )
                    })
                }
            </ul>
        </SimilarSongsWrapper>
    )
}

export default memo(SimilarSongs);