import React,{memo}from "react";

import MyblockOne from "./block_one/index";
import MyblockTwo from "./block_two/index";
import MyblockThree from "./block_three/index";


import {PromptBoxWrapper} from "./style";
function PromptBox(props) {
    const {searchSuggestResult} = props
    return (
        <PromptBoxWrapper>
            <div className="infoResult">
                <p className="user">&nbsp;&nbsp;&nbsp;搜索相关用户&nbsp;&gt;</p>
                {searchSuggestResult.result.songs && <MyblockThree info={searchSuggestResult.result.songs} word={"单曲"}/>}
                {searchSuggestResult.result.artists && <MyblockOne info={searchSuggestResult.result.artists} word={"歌手"}/>}
                {searchSuggestResult.result.albums && <MyblockTwo info={searchSuggestResult.result.albums} word={"专辑"}/>}
                {searchSuggestResult.result.playlists && <MyblockOne info={searchSuggestResult.result.playlists} word={"歌单"}/>}
            </div>
        </PromptBoxWrapper>
    )
}

export default memo(PromptBox);

