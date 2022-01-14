import React, { memo } from "react";

import { 
  SongsThreeCoverWrapper
 } from "./style";

 import {
   getSizeImg,
   getJoiningTogether
  } from "../../utils/data-format";

import {SETTLE_SINGER_URL} from "@/common/contants.js"

function SongsThreeCover(props) {

  const {name,picUrl,size,id} = props;
  
  return (
    <SongsThreeCoverWrapper>
      <a href={getJoiningTogether(SETTLE_SINGER_URL,"id",id)} className="stw-a">
        <img src={getSizeImg(picUrl,size)} alt="" />
      </a>
      <div className="stw-div">
        <h2>{name}</h2>
        <p>音乐人</p>
      </div>
    </SongsThreeCoverWrapper>
  )
}


export default memo(SongsThreeCover);
