import React, { memo, useCallback, useEffect, useRef, useState} from "react";

import {
  PlayerBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style';

import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { message } from 'antd';
import {
  getSongDetailAction,
  changeSequenceAction,
  changePlaySongAction,
  changeCurrentLyricIndexACction,
} from "../store/actionCreators";
import {formatMinuteSecond} from "../../../utils/data-format";
import { Slider } from 'antd';

import {PlayTheOrder} from "../../../common/contants";


import {getSizeImg,getPlaySong} from "../../../utils/data-format";
import { NavLink } from "react-router-dom";

import PlayPanel from "../app-play-panel/index";



function MyPlayerBar() {

  const [currentTime,setCurrentTime] = useState(0);
  const [progress,setProgress] = useState(0);
  const [isChange,setIsChange] = useState(false);
  const [isPlaying,setIsPlaying] = useState(false);
  const [isShowSongList,setIsShowSongList] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongDetailAction(168107))
  },[dispatch]);

 

  const audioRef = useRef();


  const {
    currentSong,
    sequence,
    playList,
    lyricList,
    currentLyricIndex,
  } = useSelector((state) =>({
    currentSong:state.getIn(["player","currentSong"]),
    sequence:state.getIn(["player","sequence"]),
    playList:state.getIn(["player","playList"]),
    lyricList:state.getIn(["player","lyricList"]),
    currentLyricIndex:state.getIn(["player","currentLyricIndex"]),
  }),shallowEqual);





  const picUrl = (currentSong.al &&  currentSong.al.picUrl) || "";
  const singerName =(currentSong.ar && currentSong.ar[0].name) || "未知歌手";

  const duration = currentSong.dt || 0;

  // const progress = (currentTime/duration) * 100;
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  },[currentSong]);


  const changeSequence = () => {
    let currentSquence = (sequence + 1) % 3;
    dispatch(changeSequenceAction(currentSquence));
  }

  const playMusic =   (e) => {
   e.preventDefault();
   isPlaying ? audioRef.current.pause() : audioRef.current.play();
   setIsPlaying(!isPlaying);
  //  dispatch(changeIsPlayingAction(isPlaying));
  }

  const handleMusicEnded = () => {
    if((sequence === PlayTheOrder.only) || playList.length === 1){
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }else{
      dispatch(changePlaySongAction(1))
    }
  }


  const changePlayingSong = (e,tag) => {
    e.preventDefault();
    if((playList.length === 1) || (sequence === PlayTheOrder.only)){
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }else{
      dispatch(changePlaySongAction(tag));
    }
  }

  const timeUpdate = (e) => {
    if(!isChange){
      setCurrentTime(e.target.currentTime * 1000); 
      setProgress((currentTime/duration) * 100);
    }

    //获取当前歌词
    // let thisCurrentLyricIndex = currentLyricIndex;
    // for(let i =currentLyricIndex;i< lyricList.length;i++){
    //   let lyricItem = lyricList[i];
    //   if(currentTime < lyricItem.time){
    //     thisCurrentLyricIndex = i;
    //     break;
    //   }
    // }
    //     console.log("减一:",thisCurrentLyricIndex-1);
    //     // console.log("未减:",thisCurrentLyricIndex);
    //     dispatch(changeCurrentLyricIndexACction(thisCurrentLyricIndex));


    
    let i = 0;
    let lrcLength = lyricList.length;
    for (; i < lrcLength; i++) {
      const lrcTime = lyricList[i].time;
      if (currentTime  < lrcTime) {
        break
      }
    }

    const finalIndex = i - 1;
    if (finalIndex !== currentLyricIndex) {//防止频繁的dispatch
      dispatch(changeCurrentLyricIndexACction(finalIndex));
      // console.log(lyricList[finalIndex]);
      const myContent = lyricList[finalIndex] && lyricList[finalIndex].content
      message.open({
        content: myContent,
        key: "lyric",
        duration: 0,
        className: 'lyric-message',
      })
    }


  }

  const sliderOnChange = useCallback((value) => {
    setIsChange(true);
    const currentMyTime = value / 100 * duration;
    setCurrentTime(currentMyTime);
    setProgress(value);
  },[duration]);

  const slideronAfterChange = useCallback((value) => {
    const currentMyTime = value / 100 * duration /1000;
    audioRef.current.currentTime = currentMyTime;
    setCurrentTime(currentMyTime * 1000);
    setIsChange(false);
  },[duration]);

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          {/* <button className="sprite_playbar prev"></button>
          <button className="sprite_playbar play" onClick={e => playMusic()}></button>
          <button className="sprite_playbar next"></button> */}
          <a href="/#" title="上一首" className="sprite_playbar prev"  onClick={(e) => changePlayingSong(e,-1)}>上一首</a>
          <a href="/#" title="播放/暂停" className="sprite_playbar play" onClick={e => playMusic(e)}>播放/暂停</a>
          <a href="#!" title="下一首" className="sprite_playbar next"  onClick={(e) => changePlayingSong(e,1)}>下一首</a>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImg(picUrl,35)} alt="" />
            </NavLink>
          </div>
          <div className="info"> 
            <div className="song">
              <a href="/#" className="song-name"  onClick={(e) => e.preventDefault()}>{currentSong.name}</a>
              <a className="singer-name" href="/#"  onClick={(e) => e.preventDefault()}>{singerName}</a>
              <a href="/#" className="song-icon sprite_playbar"  onClick={(e) => e.preventDefault()}>图标</a>
            </div>
            <div className="progress"> 
                <Slider defaultValue={30} 
                        value={progress}
                        onAfterChange={slideronAfterChange}
                        onChange={sliderOnChange}/>
                <div className="time">
                    <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                    <span className="divider">/</span>
                    <span className="duration">{formatMinuteSecond(duration)}</span>
                </div>
            </div>
          </div>
          
        </PlayInfo>
        <Operator sequence={sequence}>
            <div className="left">
              <div className="icon">
                  <button className="btn draw"></button>   
                 <button className="sprite_playbar btn favor"></button>
                 <button className="sprite_playbar btn share"></button>
              </div>
                 
              </div>
              <div className="right sprite_playbar">
                <button className="sprite_playbar btn volume"></button>
                <button className="sprite_playbar btn loop" onClick={(e) => changeSequence()}></button>
                <button className="sprite_playbar btn playlist" onClick={e => setIsShowSongList(!isShowSongList)}>{playList.length}</button>
              </div>
        </Operator>
      </div>
        <div className="updn">
          <div className="left sprite_playbar"> 
             <a href="/#" className="sprite_playbar up-a"  onClick={(e) => e.preventDefault()}>锁</a>
          </div> 
          <div className="rigth sprite_playbar">
          </div> 
        </div> 
      <audio  ref={audioRef} 
              onTimeUpdate={(e) => timeUpdate(e)} 
              onEnded={(e) => handleMusicEnded(e)}/>
      {isShowSongList && <PlayPanel/>}
    </PlayerBarWrapper>
  );
}


export default memo(MyPlayerBar);
