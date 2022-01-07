import React, { memo } from "react";

import { 
  AlbumWrapper,
 } from "./style";


 import {getSizeImg} from  "../../utils/data-format"




function SongsCover(props) {

  const {info,size = "130px",width = "153px",bgp = "-845px"} = props;
  return (
   <AlbumWrapper size={size} width={width} bgp={bgp}>

     <div className="album-image">
       <img src={getSizeImg(info.picUrl,size)} alt="" className=""/>
       <a href="todo" className="cover image_cover">新碟</a>
     </div>
     
     <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
     </div>

   </AlbumWrapper>
  )
  
}


export default memo(SongsCover);
