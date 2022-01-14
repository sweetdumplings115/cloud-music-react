import React, { memo } from "react";

import { PlayerLeft, PlayerRight, PlayerWrapper } from "./style";

import Comments from "./child-page/comments";
import Download from "./child-page/download";
import Playlist from "./child-page/playlist";
import SimilarSongs from "./child-page/similar-songs";
import SongInfo from "./child-page/song-info";

function Player() {
  return (
    <PlayerWrapper>
      <div className="wrap-v2 content">
        <PlayerLeft>
            <SongInfo/>
            <Comments/>
        </PlayerLeft>
        <PlayerRight>
            <Playlist/>
            <SimilarSongs/>
            <Download/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
}

export default memo(Player);
