import React,{memo, useEffect}from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";

import {getcommentsAction} from "../../store/index";
import {CommentsWrapper} from "./style";
import SongsFiveCover from "@/components/songs-five-cover"
function Comments() {

    const dispatch = useDispatch();

    const initHotComments = [undefined,undefined];

    const {comments,songId} = useSelector((state) => ({
         comments:state.getIn(["player","comments"]),
        songId:state.getIn(["player","currentSong","id"])
    }),shallowEqual);

   useEffect(() => {
        dispatch(getcommentsAction(songId))
    },[dispatch,songId]);

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



           <a href="/#" className="toTop sprite_icon4" hidefocus="ture">回到顶部</a>
              
        </CommentsWrapper>
    )
}

export default memo(Comments);