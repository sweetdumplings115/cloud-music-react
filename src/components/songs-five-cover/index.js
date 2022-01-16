import React, { memo } from "react";

import { 
  SongsFiveCoverWrapper
 } from "./style";

 import {
   getSizeImg,
   getJoiningTogether,
   getChineseFormatTime,
  } from "../../utils/data-format";

import {USER_SPACE_URL} from "@/common/contants.js"

function SongsFiveCover(props) {
  const {info,size} = props;
  const {user,content,timeStr,beReplied,likedCount} = info;

  return (
    <SongsFiveCoverWrapper>
      <a href={getJoiningTogether(USER_SPACE_URL,"id",user.userId)} className="stw-a">
        <img src={getSizeImg(user.avatarUrl,size)} alt="" />
      </a>
      <div className="stw-div">
        <div className="userName">{user.nickname}&nbsp;&nbsp;:&nbsp;</div>
        <p style={{display:"inline-block"}}>{content}</p>
        <div>
          {
            beReplied.map(item => {
              return(
              <div key={item.beRepliedCommentId} className="replied">
                <p className="nameContent">{item.user.nickname}&nbsp;:</p>
                <p style={{display:"inline-block"}}>{item.content}</p>
              </div>
              )
            })
          }
        </div>
        <p style={{marginTop:"15px",color:"#999",display:"inline-block"}}>{getChineseFormatTime(timeStr)}</p>
        <p className="like">
          <i className="icon sprite_icon3"></i>
          ({likedCount}) | 回复
        </p>
      </div>
    </SongsFiveCoverWrapper>
  )
}


export default memo(SongsFiveCover);
