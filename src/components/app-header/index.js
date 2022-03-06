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
  // getSearchAction,
  getSearchSuggestAction,
} from "../../pages/player/store/index";
import { useSelector } from "react-redux";
import { debounce } from "lodash";//防抖
import { useCallback } from "react";

function MyAppHeader() {
  const [show,setShow] = useState(true);
  const [isEmpty,setEmpty] = useState(true);
  const [value,setValue] = useState("");
  let showValue = value.trim();




  const inputRef = useRef(); 
  const promptRef = useRef()
  const myPlaceholder = "音乐/视频/电台/用户";

  useOutsideAlerter(promptRef,setEmpty);
  
  

  const dispatch = useDispatch();




  const submitInputValue = (value) => {
    dispatch(getSearchSuggestAction(value));
  }

 const debounceSubmitInputValue =  useCallback(debounce(submitInputValue,600),[]);//用useCallback 保证debounce为同一个，
 //在同一个debounce比较两次调用间隔
 //不然在600毫秒内创建的dabounce会一起等待5000毫秒在同时操作
 // 正常 
 //1
 //12
 //123
 //未加useCallback 等待后600毫秒 输入  
 //1
 //12
 //123
 //加了 等待后600毫秒 输入
 //123

  useEffect(() => {
      if(showValue !== ""){
        // dispatch(getSearchSuggestAction(showValue));
        debounceSubmitInputValue(showValue);
      }
  },[dispatch,showValue,debounceSubmitInputValue]);


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
          <Input className="search" placeholder={show ? myPlaceholder : ""} prefix={<SearchOutlined/>} onClick={(e) =>  setShow(!show)} ref={inputRef} onChange={inputChange} value={value}/>
          <div className="center">创作者中心</div>
          <div className="">登录</div> 
          {!isEmpty && <PromptBox searchSuggestResult={searchSuggestResult} userName={value} myRef={promptRef}/>}

        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );

  function inputChange(event){
    var myValue = event.target.value;
    if(myValue.trim() === ""){
       setEmpty(true);
     }else if(isEmpty === true)
     {
       setEmpty(false);
     }
     setValue(myValue); 
  }


  function useOutsideAlerter(ref,setToggle) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              // console.log(1111)
              setToggle(true);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}




 
}

export default memo(MyAppHeader);
