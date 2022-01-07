import React, { memo } from "react";

import { PlayerLeft, PlayerRight, PlayerWrapper } from "./style";
function Player() {
  return (
    <PlayerWrapper>
      <div className="wrap-v2 content">
        <PlayerLeft>
        <h2>歌词显示</h2>
        <h2>评论</h2>
        </PlayerLeft>
        <PlayerRight>
            <h2>歌单</h2>
            <h2>相似歌曲</h2>
            <h2>网易云下载</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
}

export default memo(Player);
