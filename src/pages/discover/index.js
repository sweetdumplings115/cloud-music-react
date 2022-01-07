import React, { memo} from "react";

import { NavLink } from "react-router-dom";



import { dicoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";

function MyPageDiscover() {

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div key={item.title} className="item">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
}


export default memo(MyPageDiscover);
