import styled from "styled-components";

import bgd from "@/assets/img/recommend-top-bg.png";

export const LoginWrapper = styled.div`
  background-position: 0 0;
  /* .tops {
    margin: 30px 0;
    display: flex;
    background-image: url(${bgd});
    height: 472px;
  } */
  .user-profile {
    font-size: 12px;
    height: 126px;
    width: 254px;

    p {
      color: #666;
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      text-align: center;
    }
    a {
    background-position: -110px -195px;
    display: block;
    width: 100px;
    height: 31px;
    margin: 0 auto;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    }
  }
`