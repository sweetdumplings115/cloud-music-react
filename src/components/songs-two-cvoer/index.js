import React, { memo } from "react";

import { 
  SongsTwoCoverWrapper
 } from "./style";

 import {
   getSizeImg,
   getJoiningTogether
  } from "../../utils/data-format";

import {HOT_HOST_URL} from "@/common/contants.js"

function SongsTwoCover(props) {

  const {info} = props;
  const {id} =info;
  
  return (
    <SongsTwoCoverWrapper>
      <a href={getJoiningTogether(HOT_HOST_URL,"id",id)} className="stw-a">
        <img src={getSizeImg(info.avatarUrl,40)} alt="" />
      </a>
      <div className="stw-div">
        <p>{info.nickName}</p>
      </div>
    </SongsTwoCoverWrapper>
  )
}


export default memo(SongsTwoCover);
