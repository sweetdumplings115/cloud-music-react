import React,{memo}from "react";

import MyblockOne from "./block_one/index";
import MyblockTwo from "./block_two/index";
import MyblockThree from "./block_three/index";


import {PromptBoxWrapper} from "./style";
function PromptBox(props) {
    const {searchSuggestResult,userName,myRef} = props
   
    return (
        <PromptBoxWrapper>
            <div className="infoResult" ref={myRef}>
                <p className="user">&nbsp;&nbsp;&nbsp;搜索相关用户{userName}&nbsp;&gt;</p>
                {(searchSuggestResult  && searchSuggestResult.result && searchSuggestResult.result.songs) && <MyblockThree info={searchSuggestResult.result.songs} word={"单曲"}/>}
                {(searchSuggestResult  && searchSuggestResult.result && searchSuggestResult.result.artists) && <MyblockOne info={searchSuggestResult.result.artists} word={"歌手"}/>}
                {(searchSuggestResult  && searchSuggestResult.result && searchSuggestResult.result.albums) && <MyblockTwo info={searchSuggestResult.result.albums} word={"专辑"}/>}
                {(searchSuggestResult  && searchSuggestResult.result && searchSuggestResult.result.playlists) && <MyblockOne info={searchSuggestResult.result.playlists} word={"歌单"}/>}
            </div>
        </PromptBoxWrapper>
    )
}

export default memo(PromptBox);

