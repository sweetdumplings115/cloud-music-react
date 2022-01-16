import React, {memo, useState} from "react";


import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight } from "./style.js";

import PromptBox from "./child-page/index.js";

import {Input} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { headerLinks } from "@/common/local-data.js";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";


import {
  getSearchAction,
  getSearchSuggestAction,
} from "../../pages/player/store/index";
import { useSelector } from "react-redux";

function MyAppHeader() {
  const [show,setShow] = useState(true);
  const [isChange,setIsChange] = useState(false);
  const [isEmpty,setEmpty] = useState(true);
  

  let value ;
  const inputRef = useRef(); 
  const myPlaceholder = "音乐/视频/电台/用户";
  
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchSuggestAction("群"));
  },[dispatch,isChange]);

  const {searchSuggestResult} = useSelector((state) => ({
    searchSuggestResult:state.getIn(["player","searchSuggest"])
  }),shallowEqual);


  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    }else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search" placeholder={show ? myPlaceholder : undefined} prefix={<SearchOutlined/>} onClick={(e) =>  setShow(!show)} ref={inputRef} onChange={() => inputChange()} value={value}/>
          <div className="center">创作者中心</div>
          <div className="">登录</div> 
          {!isEmpty && <PromptBox searchSuggestResult={searchSuggestResult}/>}

        </HeaderRight>
      </div>
      <div className="divider"></div>
     
    </HeaderWrapper>
  );

  function inputChange(){
    value = inputRef.current.state.value;
    setIsChange(!isChange);
    if(value != ""){
      setEmpty(false);
    }
    console.log(value);
  }
 
}

export default memo(MyAppHeader);
