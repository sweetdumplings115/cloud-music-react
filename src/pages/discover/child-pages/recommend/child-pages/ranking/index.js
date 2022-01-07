import React, { memo, useEffect } from "react";

import {shallowEqual, useDispatch, useSelector} from "react-redux";

import TopRanking from "../../../../../../components/top-ranking"

import {
  SONG_RANKING_SOAR_ID,
  SONG_RANKING_ACG_ID,
  // SONG_RANKING_ELECTRONIC_MUSIC_ID,
  SONG_RANKING_VIP_ID
} from "../../../../../../common/contants"


import {getSongRankingAction} from "../../store/actionCreators"

import ThemeHeaderRecommend from "@/components/theme-header/recommemd/index";
import {RankingWrapper} from "./style";

function MyPageDiscoverRanking() {
  const dispatch = useDispatch();
  const {
    songRankingAcg,
    // songRankingElectronic,
    songRankingSoar,
    songRankingVIP} = useSelector(state => ({
    songRankingAcg:state.getIn(["recommend","songRankingAcg"]),
    songRankingSoar:state.getIn(["recommend","songRankingSoar"]),
    songRankingElectronic:state.getIn(["recommend","songRankingElectronic"]),
    songRankingVIP:state.getIn(["recommend","songRankingVIP"]),
  }),shallowEqual);

  

  useEffect(() => {
    dispatch(getSongRankingAction(SONG_RANKING_SOAR_ID));
    // dispatch(getSongRankingAction(SONG_RANKING_ELECTRONIC_MUSIC_ID));
    dispatch(getSongRankingAction(SONG_RANKING_ACG_ID));
    dispatch(getSongRankingAction(SONG_RANKING_VIP_ID));
  },[dispatch]);

  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单"/>
      <div className="tops">
          <TopRanking info={songRankingSoar}/>
          {/* <TopRanking info={songRankingElectronic}/> */}
          <TopRanking info={songRankingAcg}/>
          <TopRanking info={songRankingVIP}/>
      </div>
    </RankingWrapper>
    
  );
}

export default memo(MyPageDiscoverRanking);

