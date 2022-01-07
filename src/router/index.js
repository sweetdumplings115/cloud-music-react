import { Navigate } from "react-router-dom";
import React from "react";
// import Recommend from "../pages/discover/child-pages/recommend";
// import RankingList from "../pages/discover/child-pages/ranking-list";
// import SongList from "../pages/discover/child-pages/song-list";
// import Radio from "../pages/discover/child-pages/radio";
// import Singer from "../pages/discover/child-pages/singer";
// import NewSong from "../pages/discover/child-pages/new-song";
// import NotFound from "../pages/notfoud/NotFound";
// import Player from "../pages/player";//懒加载，提高首屏速度
// import MyPageDiscover from "../pages/discover/index";
// import MyPageMine from "@/pages/mine";
// import MyPageFriend from "@/pages/friend";

const Recommend  = React.lazy(() => import("../pages/discover/child-pages/recommend"));//懒加载，提高首屏速度
const RankingList = React.lazy(() => import("../pages/discover/child-pages/ranking-list"));
const SongList = React.lazy(() => import("../pages/discover/child-pages/song-list"));
const Radio = React.lazy(() => import("../pages/discover/child-pages/radio"));
const Singer = React.lazy(() => import("../pages/discover/child-pages/singer"));
const NewSong = React.lazy(() => import("../pages/discover/child-pages/new-song"));
const NotFound = React.lazy(() => import("../pages/notfoud/NotFound"));
const Player = React.lazy(() => import("../pages/player"));
const MyPageDiscover = React.lazy(() => import("../pages/discover/index"));
const MyPageMine = React.lazy(() => import("@/pages/mine"));
const MyPageFriend = React.lazy(() => import("@/pages/friend"));



const routes = [
    {
        path: "/discover", 
        element: <MyPageDiscover/>,
        children:[
            {  
                path: '/discover', 
                element:<MyNavigate/>   
            },
            {
                path: "/discover/recommend",
                element: <Recommend/>
            },
            {
                path: "/discover/rankinglist",
                element: <RankingList/>
            },
            {
                path:"/discover/songlist",
                element: <SongList/>
            },
            {
                path:"/discover/radio",
                element: <Radio/>
            },
            {
                path:"/discover/singer",
                element:<Singer/>
            },
            {
                path:"/discover/newsong",
                element:<NewSong/>
            },
            {
                path:"/discover/player",
                element:<Player/>
            },
        ] },
    { 
        path: '/', 
        element:<Navigate to="/discover"/>
    },
    {path: "/mine", element: <MyPageMine/> },
    {path: "/friend", element: <MyPageFriend/> },
    { path: '*', element: <NotFound/> }
];


function MyNavigate(){
    return(
        <Navigate to="/discover/recommend"/>
    )
}

export default routes;
