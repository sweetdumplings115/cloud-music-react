import request from "./request";


export  function getBnners(){
    return(
        request({
            url:"/banner"
        })
    );
}

export  function getHotRecommend(limit){
    return(
        request({
            url:"/personalized",
            params:{
                limit:limit
            }
        })
    );
}

export  function getRecommendDjprogram(limit){
    return(
        request({
            url:"/personalized/djprogram",
            params:{
                limit:limit
            }
        })
    );
}


export function getNewSong(limit){
    return ( 
        request({
           url:"/album/new",
        //    url:"/top/album",
           params: {
               limit
           }
        })
    );
}

export  function getSongRanking(rankingId){
    return(
        request({
            url:"/playlist/detail",
            params:{
                id:rankingId
            }
        })
    )
}

export function getHotHost(limit){
    return(
        request({
            url:"/dj/toplist/popular",
            params:{
                limit
            }
        })
    )
}