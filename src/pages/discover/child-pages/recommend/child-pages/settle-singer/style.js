import styled from "styled-components";



export const SettleSingerWrapper = styled.div`
   width:250px;
   height:455px;
   margin-top: 15px;

   .s-h3 {
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 100%;
    font-weight: bold;
   }

   .s-ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 20px;
      li {
          width: 210px;
          height: 62px;
          margin-top: 14px;
        }
   }

   .s-div {
    width:250px;
    height:31px;
    a:hover {
           text-decoration: none;
      }
    a {
      display: block;
      width:210px;
      height:31px;
      padding-right: 5px;
      text-align: center;
      /* background-position-x: right;
      background-position-y: -100px; */
      background-position:right -100px;
      margin-left: 18px;
      border-radius: 4px;
      color: rgb(51, 51, 51);
      i {
        display: inline-block;
        text-align: center;
        color: #333;
        font-weight:800;
        line-height: 31px;
        /* background-position:right -100px; */
        background-position: 0px -59px;
        width:205px;
        height:31px;
        padding: 0 15px 0 20px;
      }
      
    }
   }
  
 
`