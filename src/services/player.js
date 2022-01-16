import request from "./request";
export function getSongDetail(ids){
    return ( 
        request({
            url:"/song/detail",
            params:{
                ids
            }
        })
    )
}



export function getLyric(id) {
    return request({
      url: "/lyric",
      params: {
        id
      }
    })
  }

export function  getIncludeThisSongList(id) {
  return request({
    url:"/simi/playlist",
    params:{
      id
    }
  })
}

export function getSimilarSongs(id) {
  return request({
    url:"/simi/song",
    params:{
      id
    }
  })
}

export function getcomments(id) {
  return request({
    url:"/comment/music",
    params:{
      id
    }
  })
}

export function getSearchSuggest(keywords){
  return request({
    url:"/search/suggest",
    params:{
      keywords
    }
  })
}

export function  getSearch(keywords){
  return request({
    url:"/search",
    params:{
      keywords
    }
  })
}