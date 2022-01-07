import React,{memo} from "react";

// import {
//     // connect,
//     useDispatch,
//     useSelector,shallowEqual} from "react-redux";

// import {getBannersAction} from "./store/actionCreators"

import Banner from "./child-pages/banner/index";


import HotRecommend from "./child-pages/hot-recommend";
import MyPageDiscoverNewSong from "./child-pages/newsong";
import MyPageDiscoverRanking from "./child-pages/ranking";
import HotHost from "./child-pages/hot-host";
import SettleSinger from "./child-pages/settle-singer";

import UserLogin from "./child-pages/userLogin";

import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from  "./style"

function Recommend(props){
    // const {getBnners} = props;  1.

    //组件与redux关联要做：获取数据和操作 使用hook
    // const dispatch = useDispatch(); 2.

    // const {banner} = useSelector(state => ({ 2.
    //     // banner:state.recommend.banner,  

    //     // banner:state.get("recommend").get("banner"),等价于下面的
    //     banner:state.getIn(["recommend","banner"]),

    // }),shallowEqual);//默认比较返回对象是===比较，每次都创建了一个对象但值一样，但依旧会重新渲染，用shallowEqual(浅层比较)

    // useEffect(() => { 2.
    //     dispatch(getBannersAction());
    // },[dispatch]);


    return(
        <RecommendWrapper>
           <Banner/>
           <Content className="wrap-v2">
               <RecommendLeft>
                   <HotRecommend />
                   <MyPageDiscoverNewSong/>
                   <MyPageDiscoverRanking/>
               </RecommendLeft>
               <RecommendRight>
                   <UserLogin/>
                   <SettleSinger/>
                   <HotHost/>
               </RecommendRight>
           </Content>
        </RecommendWrapper>
    )
}
export default memo(Recommend);

//1.
//此state是最外层的，要加recommend
// const mapStateToprops =  (state) => ({
//     banner:state.recommend.banner,
// });

// const mapDisptchToProps = (dispatch) => ({
//     getBnners: () => {
//         dispatch(getBannersAction());
//     }
// }) 

// export default connect(mapStateToprops,mapDisptchToProps)(memo(Recommend));

