import React, { memo } from "react";

import { TopRankingWrapper } from "./style";

import {getSizeImg} from "../../utils/data-format.js";

import {getSongDetailAction,addSongListAction} from "../../pages/player/store/index";
import {  useDispatch } from "react-redux";



function TopRanking(props) {
  const {info = {coverImgUrl:""}} = props;
  // const {info} = props;
  const { tracks = [] } = info;

  const dispatch = useDispatch();


  
  const playMusic = (song,e) => {
    // console.log(song.id);
    e.preventDefault();
    dispatch(getSongDetailAction(song.id));
  }

  const addMusicTOPlayList = (song,e) => {
    e.preventDefault();
    // console.log(song.id);
    dispatch(addSongListAction(song));
  }


   return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImg(info.coverImgUrl,100)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        <div>
          {
           tracks.slice(0,10).map((item,index) => {
              return(
                <div className="list-item" key={item.id}>
                  <div className="rank">{index + 1}</div>
                  <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    {/* <button className="btn sprite_02 play" onClick={() => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button> */}
                    <a href="/#" title="播放" className="a sprite_02 play" onClick={(e) => playMusic(item,e)}>播放</a>
                    <a href="/#" title="添加到播放列表" className="a sprite_icon2 addto" onClick={(e) => addMusicTOPlayList(item,e)}>播放列表</a>
                    <a href="/#" title="收藏" className="a sprite_02 favor"  onClick={(e) => e.preventDefault()}>收藏</a>
                  </div>
                </div>
                </div>
              )
            })
          }
        </div>

      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
}

export default memo(TopRanking);
