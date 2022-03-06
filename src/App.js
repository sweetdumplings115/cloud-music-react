import React, { memo } from "react";

import { HashRouter } from "react-router-dom";

import store from "./store";

import {Provider} from "react-redux";

import MyRoutes from "./components/app-center-router";
import PlayerBar from "./pages/player/player-bar";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

function App() {
  return (
    <div>
      <Provider store={store}>
         <HashRouter>
           <AppHeader/>
           <MyRoutes/>
           <AppFooter/>
           <PlayerBar/>
         </HashRouter>
      </Provider>
     
    </div>
  );
}

export default memo(App);
