import React,{memo}from "react";

function MyPageCreator() {
    return (
        <div>
            <h2>PageCreator</h2>
        </div>
    )
}

export default memo(MyPageCreator);