import React, { memo,useState} from "react";
import { shallowEqual, useSelector } from "react-redux";
import { SongInfoWrapper } from "./style";

import { getSizeImg } from "@/utils/data-format";
import SongOperationBar from '@/components/song-operation-bar';
function SongInfo() {
    const [isSpread, setIsSpread] = useState(false);


    const { songName, singerName, picUrl,currentLyrics,albumName,comments} = useSelector((state) => ({
      songName: state.getIn(["player", "currentSong", "name"]),
      singerName: state.getIn(["player", "currentSong", "ar"]),
      picUrl: state.getIn(["player", "currentSong", "al", "picUrl"]),
      albumName: state.getIn(["player", "currentSong", "al", "name"]),
      currentLyrics: state.getIn(["player", "lyricList"]),
      comments:state.getIn(["player","comments"]),
    }),shallowEqual);

  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  return (
    <SongInfoWrapper isSpread={isSpread}>
      <div className="songinfo">
        <div className="right">
          <div className="image">
            <img src={getSizeImg(picUrl, 135)} alt="" />
            <span className="cover image_cover"></span>
          </div>
          <div className="link">
            <i className="sprite_icon2"></i>
            <a href="#/">生成外联播放器</a>
          </div>
        </div>


        <div className="left">
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{songName}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          {
              singerName.map((item) => {
                  return(<a href="/#" className="name" key={item.id}>{item.name}</a>)
              })
          }
          
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{albumName}</a>
        </div>

        <SongOperationBar favorTitle="收藏"
                            shareTitle="分享"
                            downloadTitle="下载"
                            commentTitle={comments.total}/>

        <div className="lyric">
          <div className="lyric-info">
            {
              currentLyrics.slice(0, totalLyricCount).map((item) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
                  onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起": "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
        </div>
      </div>
      <div></div>
    </SongInfoWrapper>
  );
}

export default memo(SongInfo);
