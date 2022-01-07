import styled from 'styled-components';

import pcgUrl from "@/assets/img/wrap-bg.png";

export const PlayerWrapper = styled.div`
  .content {
    background: url(${pcgUrl}) repeat-y;
    background-color: #fff;
    display: flex;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`
