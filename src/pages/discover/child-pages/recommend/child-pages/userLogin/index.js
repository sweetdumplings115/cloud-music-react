import React, { memo} from "react";




import {LoginWrapper} from "./style";

function MyPageDiscoverUserLogin() {
  
  return (
    <LoginWrapper className="sprite_02">
      <div className="user-profile">
         <p >登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
         <a href="/#"  className="sprite_02">用户登录</a>
      </div>
    </LoginWrapper>
  
  );
}

export default memo(MyPageDiscoverUserLogin);

