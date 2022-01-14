import React, { memo } from "react";

import { 
  SongsFCoverWrapper
 } from "./style";

 import {
   getSizeImg,
   getJoiningTogether
  } from "../../utils/data-format";

import {SIMILAR_PLAYLIST_URL} from "@/common/contants.js"

function SongsFCover(props) {

  const {name,picUrl,size,id,provenance} = props;
  
  return (
    <SongsFCoverWrapper>
      <a href={getJoiningTogether(SIMILAR_PLAYLIST_URL,"id",id)} className="stw-a">
        <img src={getSizeImg(picUrl,size)} alt="" />
      </a>
      <div className="stw-div">
        <div className="hide">{name}</div>
        <h6>by {provenance}</h6>
      </div>
    </SongsFCoverWrapper>
  )
}


export default memo(SongsFCover);
