// import styled from 'styled-components';


// import RigthUrl from "@/assets/img/download.png";
// import ControlUrl from "@/assets/img/banner_sprite.png";

// export const BannerWrapper = styled.div`
//   background: url(${props => props.bgImage}) center center/6000px;

//   .banner {
//     height: 270px;
//     background-color: red;

//     display: flex;
//     position: relative;
//   }

//   .banner .banner-div{
//     width: 260px;
//     height: 270px;
//     background: url(${RigthUrl});
//     .banner-p {
//       /* margin: 10px auto; */
//       text-align: center;
//       color: #8d8d8d;
//       height: 16px;
//     }
//   }
// `

// export const BannerLeft = styled.div`
//   width: 730px;

//   .banner-item {
//     overflow: hidden;
//     height: 270px;
//     .image {
//       width: 100%;
//     }
//   }
// `


// export const BannerRight = styled.a.attrs({
//   href: "https://music.163.com/#/download",
//   target: "_blank"
// })`
//   width: 254px;
//   height: 254px;
//   display:block;
// `

// export const BannerControl = styled.div`
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 50%;
//   transform: translateY(-50%);

//   .btn {
//     position: absolute;
//     width: 37px;
//     height: 63px;
//     background-image: url(${ControlUrl});
//     background-color: transparent;
//     cursor: pointer;

//     &:hover {
//       background-color: rgba(0, 0, 0, .1);
//     }
//   }

//   .left {
//     left: -68px;
//     background-position: 0 -360px;
//   }

//   .right {
//     right: -68px;
//     background-position: 0 -508px;
//   }
// `


import styled from 'styled-components';


import RigthUrl from "@/assets/img/download.png";
import ControlUrl from "@/assets/img/banner_sprite.png";

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }

  .banner .banner-div{
    width: 252px;
    height: 270px;
    background: url(${RigthUrl});
    .banner-p {
      text-align: center;
      /* margin: 1px auto; */
      margin-bottom: 8px;
      margin-top: 6px;
      color: #8d8d8d;
      height: 16px;
    }
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 730px;
      height:270px;
    }
  }
`


export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 240px;
  display:block;
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${ControlUrl});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`