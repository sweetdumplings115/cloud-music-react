import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBannersAction } from "../../store/actionCreators";
import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";



function MyPageDiscoverBanner() {

  const [currentIndex,setCurrentIndex] =useState(0);

  const dispatch = useDispatch();
  const { banner } = useSelector(
    (state) => ({
      banner: state.getIn(["recommend", "banner"]),
    }),
    shallowEqual
  );

  const bannerRef = useRef();

  useEffect(() => {
    dispatch(getBannersAction());
  }, [dispatch]); //加[dispatch]只在组件加载时请求,dispatch改变时,不加会一直请求

  const bannerChange = useCallback((from,to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    },0);
      
  },[]);

  const bgImage = banner[currentIndex] && (banner[currentIndex].imageUrl + "?imageView&blur=40x20");


  return (
    <BannerWrapper bgImage={bgImage}> {/* bgImage={} 在style中通过props可以取到 */}
      <div className="banner wrap-v2">
        <BannerLeft >
          <Carousel effect="fade" autoplay="ture" ref={bannerRef} beforeChange={bannerChange}>
            {
                banner.map((item) => {
                    return(
                        <div className="banner-item" key={item.imageUrl}>
                            <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                        </div>
                    )
                })
            }
          </Carousel>
        </BannerLeft>
        <div className="banner-div">
            <BannerRight/>
            <p className="banner-p">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
        <BannerControl>
            <button className="btn left"  onClick={(e) => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

export default memo(MyPageDiscoverBanner);
