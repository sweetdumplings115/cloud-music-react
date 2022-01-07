import React, { memo, useEffect, useRef } from "react";

import { getNewSongAction } from "../../store/actionCreators";

import {
  RECOMMEND_NEW_SONG_LIMIT,
  NEW_SONG_PAGE_NUM,
  NEW_SONG_PER_PAGE,
} from "../../../../../../common/contants";

import { getArray } from "@/utils/data-change";

import { Carousel } from "antd";

import AlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";
import ThemeHeaderRecommend from "@/components/theme-header/recommemd/index";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function MyPageDiscoverNewSong() {
  const dispatch = useDispatch();
  const PageRef =  useRef();

  const { newSongs } = useSelector(
    (state) => ({
      newSongs: state.getIn(["recommend", "newSongs"]),
    }),
    shallowEqual
  );


  useEffect(() => {
    dispatch(getNewSongAction(RECOMMEND_NEW_SONG_LIMIT));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <ThemeHeaderRecommend title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={(e) => PageRef.current.prev()}></button>
        <div className="album">
            <Carousel dots={false} ref={PageRef}>
                {
                  getArray(NEW_SONG_PAGE_NUM).map(item => {
                    return(
                    <div className="page" key={item}>
                    {
                      newSongs.slice(item*NEW_SONG_PER_PAGE,(item + 1)*NEW_SONG_PER_PAGE).map(iten => {
                        return (<AlbumCover key={iten.id} info={iten} size={100} width={118} bgp={-570}/>)
                      })
                    }
                    </div>
                    )
                  })
                }
            </Carousel>
        </div>
        <button className="arrow-right arrow sprite_02" onClick={(e) => PageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  );
}

export default memo(MyPageDiscoverNewSong);
