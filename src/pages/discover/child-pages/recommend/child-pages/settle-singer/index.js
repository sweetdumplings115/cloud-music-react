import React, {memo} from "react";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSettleSingerAction} from "../../store/actionCreators";

import {SETTLE_SINGER_LIMIT, MUSIC_OF_PEOPLE} from "../../../../../../common/contants"

import SongsThreeCover from "../../../../../../components/songs-three-cover";
import {SettleSingerWrapper} from "./style";


function MyPageDiscoverSettleSinger() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettleSingerAction(SETTLE_SINGER_LIMIT))
  },[dispatch]);

  const {settleSinger} = useSelector(state => ({
    settleSinger:state.getIn(["recommend","settleSinger"])
  }),shallowEqual);

  return (
    <SettleSingerWrapper >
      <h3 className="s-h3">
        <span>入驻歌手</span> 
        <a href="/#">查看全部 &gt;</a>
      </h3>
     <ul className="s-ul">
         {
           settleSinger.map(item => {
             return (
              //  <li key={item.id}>{item.name}</li>
              <SongsThreeCover name={item.name} picUrl={item.picUrl} size={62} id={item.id}/>
             )
           })
         }
     </ul>
     <div className="s-div">
       <a href={MUSIC_OF_PEOPLE} className="sprite_button">
         <i className="sprite_button">申请成为网易音乐人</i>
       </a>
     </div>
    </SettleSingerWrapper>
  );
}

export default memo(MyPageDiscoverSettleSinger);

