import React, { memo } from "react";

import { 
  SongsCoverWrapper,
 } from "./style";

 import {
   getNum,
   getSizeImg
  } from "../../utils/data-format";



function SongsCover(props) {

  const {info} = props;
  const {creator = {nickname: "unknown"}} = info;
  
  //  return (
  //    <SongsCoverWrapper>
  //      <div className="cover-top">
  //         <img src={info.picUrl} alt="" />
  //         <div className="cover sprite_cover">
  //           <div className="info sprite_cover">
  //             <sapn >
  //               <i className="erji sprite_icon"/>
  //               {getCount(info.playCount)}
  //             </sapn>
  //             <i className="sprite_icon play"></i>
  //           </div>
  //         </div>
  //      </div>
  //      <div className="cover-bottom text-nowrap">
  //        {
  //          info.name
  //        }
  //      </div>
  //      <div className="cover-source text-nowrap">
  //        by {info.copywriter || info.creator.nickname}
  //      </div>
  //    </SongsCoverWrapper>
  // );
  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImg(info.picUrl,140)  } alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getNum(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
      by {info.copywriter || creator.nickname}
      </div>
    </SongsCoverWrapper>
  )
}


export default memo(SongsCover);
