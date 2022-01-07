import styled from 'styled-components';

import SliderUrl from "../../../assets/img/progress_bar.png";
import IconUrl from "../../../assets/img/sprite_icon.png";


export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  width:1536px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }



  .updn {
    z-index: 11;
    height: 52px;
    width:15px;

    .left {
        display: inline-block;
        position: absolute;
        /* top: -14px;
        right: 15px;
        bottom: 0; */
        width: 52px;
        height: 67px;
        background-position: 0 -380px;

      .up-a {
        width: 18px;
        display: flex;
        left: 0px;
        bottom: 0px;
        height: 18px;
        margin: 6px 0 0 17px;
        background-position: -100px -380px;
        text-indent: -9999px;

      }

    }
    .rigth {
        display: inline-block;
        /* top: -1px;
        right: 0px; */
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        pointer-events: none;
    }
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    display: inline-block;
    background-position: 0 -130px;
    cursor: pointer;
    text-indent: -9999px;
  }

  .play {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlaying ? "-165px": "-204px"};
    cursor: pointer;
    text-indent: -9999px;
  }

  .next {
    display: inline-block;
    background-position: -80px -130px;
    cursor: pointer;
    text-indent: -9999px;
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      /* position: relative; */
      top: 8px;
      left: 8px;
      display: block;

      .singer-name {
        height:15px;
        display: inline-block;
        color: #a1a1a1;
        margin-left: 10px;
        margin-bottom:5px;
        cursor: pointer;
      }

      .song-name {
        height:15px;
        margin-bottom:5px;
        display: inline-block;
        cursor: pointer;
      }


      .song-icon {
        display: inline-block;
        width: 14px;
        height: 15px;
        background-position: -110px -101px;
        margin: 7px 0 0 13px;
        cursor: pointer;
        text-indent: -9999px;
      }

    }

    .progress {
      height:12px;
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        /* margin-right: 10px; */
        margin: 1px 6px 2px;
        .ant-slider-rail {
          height: 9px;
          background: url(${SliderUrl}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${SliderUrl}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${IconUrl}) 0 -250px;
        }
      }

      .time {
        height:12px;
        .now-time {
          display:inline-block;
          height:12px;
          color: #e1e1e1;
        }
        .divider {
          display:inline-block;
          margin: 0 3px;
        }
        .duration {
          display:inline-block;
          height:12px;
        }
      }
    }
  }
  
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .draw {
    position: relative;
    background: url(//p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991) no-repeat 0 0;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
