import React, { memo, useEffect } from "react";
import {HOT_RECOMMEND_LIMIT} from "@/common/contants";

import {useDispatch,useSelector,shallowEqual} from "react-redux";

import {getHotRecommendAction} from "../../store/actionCreators";

import SongsCover from "@/components/songs-cover";

import  {
  HotRecommendWrapper
} from "./style";

import ThemeHeaderRecommend from "@/components/theme-header/recommemd/index";


function MyPageDiscoverHotRecommend() {

  const dispatch = useDispatch();

  const {hotRecommends} = useSelector(state => ({
    hotRecommends:state.getIn(["recommend", "hotRecommends"])
  }),shallowEqual);
 
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  },[dispatch]);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend title="热门推荐" keywords={["华语","流行","摇滚","民谣","电子"]}/>
      <div className="recommend-list">
        {
          hotRecommends.map((item) => {
            return(
              <SongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
      
    </HotRecommendWrapper> 
  );
}

export default memo(MyPageDiscoverHotRecommend);
