import React,{memo}from "react";


import {DownloadWrapper} from "./style";
function Download() {
    return (
        <DownloadWrapper>
            <p className="down-p">网易云音乐多端下载</p>
            <div className="sprite_icon4">
                <a href="/#" className="mya">苹果手机</a>
                <a href="/#" className="mya a-2">电脑</a>
                <a href="/#" className="mya">安卓手机</a>
            </div>
            <p style={{color:"#C0C0C0"}}>同步歌单，随时畅听320k好音乐</p>
        </DownloadWrapper>
    )
}

export default memo(Download);