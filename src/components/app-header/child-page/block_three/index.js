import React,{memo}from "react";

import {NavLink} from "react-router-dom";

import {BlockWrapper} from "./style";
function Block(props) {
  const {info,word} =props;
    return (
        <BlockWrapper>
              <div className="info">
                <h3 className="word">
                   <i></i>
                    <em >{word}</em>
                </h3>
                <ul className="content">
                  {
                   
                    info.map(item => {
                      return  <li className="li" key={item.id}><NavLink to="/discover/player" style={{textDecoration:"none"}}>{item.name}&nbsp;&nbsp;{item.artists[0].name} </NavLink></li>
                    })
                  }
                </ul>
              </div>
        </BlockWrapper>
    )
}

export default memo(Block);

