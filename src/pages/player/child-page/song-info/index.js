import React,{memo}from "react";
import {SongInfoWrapper} from "./style";
function SongInfo() {
    return (
        <SongInfoWrapper>
            <h2>歌曲显示</h2>
        </SongInfoWrapper>
    )
}

export default memo(SongInfo);