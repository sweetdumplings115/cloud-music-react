import { Suspense } from "react";
import {useRoutes} from "react-router-dom";

import routes from "../../router/index.js";

function MyRoutes() {
  return(
    <div> 
      <Suspense fallback={<div>加载中</div>}>
        {/* 懒加载,js打包为多个模块，需要时才请求解决首屏加载过慢。请求其他页面等待时的提示 即fallback中的内容 */}
        <Route/>
        <Route1/>
      </Suspense>
    </div>
  );
    
  }

function Route(){
  let elment = useRoutes(routes);
  return elment;
}
function Route1(){
  let elment = useRoutes(routes[0].children);
  return elment;
}

export default MyRoutes;