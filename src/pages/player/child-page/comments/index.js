import React,{memo, useEffect}from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";

import {getcommentsAction} from "../../store/index";
import {CommentsWrapper} from "./style";
import SongsFiveCover from "@/components/songs-five-cover"
function Comments(props) {

    const dispatch = useDispatch();

    const initHotComments = [undefined,undefined];

    const { detailsPageSongId } = props;//进入详情页歌曲的id

    // console.log("评论",detailsPageSongId);

    const {comments,songId} = useSelector((state) => ({
         comments:state.getIn(["player","comments"]),
        songId:detailsPageSongId ? detailsPageSongId : state.getIn(["player","currentSong","id"])
    }),shallowEqual);

   useEffect(() => {
        dispatch(getcommentsAction(songId))
    },[dispatch,songId,detailsPageSongId]);

    const myComments = comments.hotComments || initHotComments;
    const myRecentComments = comments.comments || initHotComments
    return (
        <CommentsWrapper>
            <div className="header">
                <h2 style={{display:"inline-block"}}>评论&nbsp;&nbsp;&nbsp;&nbsp;</h2>
                <p style={{display:"inline-block"}}>评论共{comments.total}条</p>
            </div>
            <p style={{fontWeight:"600",marginBottom:"10px"}}>精彩评论</p>
           <ul>
               {
                   myComments.map((item,index) => {
                       if(item){
                            return (<SongsFiveCover key={item.commentId}  info={item} size={50} />)
                       }else{
                           return (<li key={index}>{item}</li>)
                       }
                      
                   })
               }
           </ul>
             <p style={{fontWeight:"600",marginBottom:"10px"}}>最近评论</p>
           <ul>
               {
                   myRecentComments.map((item,index) => {
                       if(item){
                            return (<SongsFiveCover key={item.commentId} info={item}  size={50}/>)
                       }else{
                           return (<li key={index}>{item}</li>)
                       }
                      
                   })
               }
           </ul>



           <div  className="toTop sprite_icon4"  onClick={(e) => toTop()}>回到顶部</div>
              
        </CommentsWrapper>
    )

    function toTop(){
        window.scrollTo(0,0);
    }



}

export default memo(Comments);