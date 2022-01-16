import styled from "styled-components";

export const SongsFiveCoverWrapper = styled.div`
    display: flex;
    margin-top: 15px;
    margin-right: 24px;
    border-top: 1px dotted #ccc;
    padding-top: 12px;
  .stw-div {
     display: block;
     margin-left: 10px;

     .userName {
       color:#0C73C2;
       display:inline-block;
     }

     .hide {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 183px;
     }

     .replied {
      background: #f4f4f4;
      border: 1px solid #dedede;
      display: inline-block;
      width: 560px;
      /* height: 38px; */
      .nameContent {
        color:#0C73C2;
        display:inline-block;
        margin-left:15px;
        margin-top:10px;
        background-color:#F4F4F4;
      }
     }

     .like {
       display:inline-block;
       margin-left:444px;

       .icon {
        background-position: -150px 6px;
        display: inline-block;
        height: 20px;
        width: 15px;
        margin-right: 12px;
      }
     }
  }

 
`

