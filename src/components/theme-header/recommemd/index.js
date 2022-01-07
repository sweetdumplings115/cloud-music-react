import React, { memo } from "react";

import { HeaderWrapper } from "./style";

import PropTypes from "prop-types";

function ThemeHeaderRecommend(props) {
  const {title,keywords} = props;
   return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map((item,index) => {
              return(
                <div className="item" key={item}>
                  {index !== 0 ? <span className="divider">|</span> : undefined}
                  <a href="todo">{item}</a>
               </div>
              )
            })

          }
        </div>
      </div>

      <div className="right">
        <a href="#/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
}
const ThemeHeaderRCM  = memo(ThemeHeaderRecommend);

ThemeHeaderRCM.defaultProps = {
  keywords: []
}//设置默认值，防止undefined

ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}//类型校验


export default ThemeHeaderRCM;
