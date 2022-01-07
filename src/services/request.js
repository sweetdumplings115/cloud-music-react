import axios from "axios";


import {BASE_URL,TIMEOUT} from "./config"

const instace = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})


instace.interceptors.request.use(config => {
    console.log("请求被拦截")
    return config;
  }, err => {

  })

instace.interceptors.response.use(res => {
    return res.data;
  },err => {
    if(err && err.response){
      switch(err.response.status){
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误");
      }
      return err;
    }
  })


export default instace;