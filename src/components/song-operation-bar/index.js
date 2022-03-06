import React, { memo } from 'react';

import { OperationBarWrapper } from './style';

import {getSongDetailAction,addSongListAction} from "../../pages/player/store/index";
import { useDispatch } from 'react-redux';

export default memo(function SongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle,song} = props;

  const dispatch = useDispatch();

  console.log("song",song);

  const playMusic = (song) => {
    dispatch(getSongDetailAction(song.id));
  }

  const addMusicTOPlayList = (song) => {
    dispatch(addSongListAction(song));
  }

  return (
    <OperationBarWrapper>

      <span className="play">

        <div  className="play-icon sprite_button" onClick={() => playMusic(song)}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </div>

        <div  className="add-icon sprite_button" onClick={() => addMusicTOPlayList(song)}>+</div>
      </span>

      <div  className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </div>


      <div  className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </div>
      <div  className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </div>
      <div  className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </div>
    </OperationBarWrapper>
  )
})
