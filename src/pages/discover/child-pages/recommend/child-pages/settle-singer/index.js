import React, {memo} from "react";

import {MUSIC_OF_PEOPLE} from "../../../../../../common/contants"


import {SettleSingerWrapper} from "./style";

function MyPageDiscoverSettleSinger() {
  
  return (
    <SettleSingerWrapper >
      <h3 className="s-h3">
        <span>入驻歌手</span> 
        <a href="/#">查看全部 &gt;</a>
      </h3>
     <ul className="s-ul">
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
       <li>5</li>
     </ul>
     <div className="s-div">
       <a href={MUSIC_OF_PEOPLE} className="sprite_button">
         <i className="sprite_button">申请成为网易音乐人</i>
       </a>
     </div>
    </SettleSingerWrapper>
  );
}

export default memo(MyPageDiscoverSettleSinger);

