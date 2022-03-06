import React, { memo } from "react";

import { PlayerLeft, PlayerRight, PlayerWrapper } from "./style";


import {
  getDetailsPageSong,
  getDetailsPagelyricList,
} from "./store/index"

import Comments from "./child-page/comments";
import Download from "./child-page/download";
import Playlist from "./child-page/playlist";
import SimilarSongs from "./child-page/similar-songs";
import SongInfo from "./child-page/song-info";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Player() {
  const location = useLocation();
  const parseExp = /\?[a-z]*[A-Z]*=(\d*)/;
  const songId = parseExp.exec(location.search) && parseExp.exec(location.search)[1];

  const dispatch = useDispatch();

  useEffect(() => {
    if(songId !== null){
      dispatch(getDetailsPageSong(songId));
      dispatch(getDetailsPagelyricList(songId));
    }
  },[dispatch,songId])


  return (
    <PlayerWrapper>
      <div className="wrap-v2 content">
        <PlayerLeft>
            <SongInfo detailsPageSongId={songId}/>
            <Comments detailsPageSongId={songId}/>
        </PlayerLeft>
        <PlayerRight>
            <Playlist detailsPageSongId={songId}/>
            <SimilarSongs detailsPageSongId={songId}/>
            <Download/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
}

export default memo(Player);
