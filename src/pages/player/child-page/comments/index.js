import React,{memo, useEffect}from "react";
import { useDispatch,useSelector,shallowEqual } from "react-redux";

import {getcommentsAction} from "../../store/index";
import {CommentsWrapper} from "./style";

function Comments() {

    const dispatch = useDispatch();
   


    const {hotComments,songId} = useSelector((state) => ({
        hotComments:state.getIn(["player","comments","hotComments"]),
        songId:state.getIn(["player","currentSong","id"])
    }),shallowEqual);

   useEffect(() => {
        dispatch(getcommentsAction(songId))
    },[dispatch,songId]);

    return (
        <CommentsWrapper>
            <h2>评论</h2>
           <ul>
               {
                   hotComments.map(item => {
                       return (<li key={item.user.userId}>{item.content}</li>)
                   })
               }
           </ul>
              
        </CommentsWrapper>
    )
}

export default memo(Comments);