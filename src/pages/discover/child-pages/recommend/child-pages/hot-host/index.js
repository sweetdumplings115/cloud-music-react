import React, { memo, useEffect } from "react";


import { useDispatch, useSelector } from "react-redux"

import {HotHostWrapper} from "./style";

import {getHotHostAction} from "../../store/actionCreators";

import {HOT_HOST_LIMIT} from "../../../../../../common/contants";

import SongsTwoCover from "../../../../../../components/songs-two-cvoer"

function MyPageDiscoverHotHost() {


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getHotHostAction(HOT_HOST_LIMIT))
  },[dispatch]);


  const {hothosts} = useSelector((state) => ({
    hothosts: state.getIn(["recommend", "hothosts"])
  }))
  
  return (
    <HotHostWrapper>
      <h3 className="h-h3">热门主播</h3>
      <ul className="h-ul">
        {
          hothosts.map((item) => {
            return(
              <SongsTwoCover info={item} key={item.id}/>
            )
          })
        }
      </ul>
    </HotHostWrapper>
  );
}

export default memo(MyPageDiscoverHotHost);

