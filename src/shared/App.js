
import React, {useState} from 'react';

import styled from 'styled-components';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user"



function App() {

  const dispatch = useDispatch()
  //
 
    return (
      <ReactContainer>
        {/* <Header/> */}
        <ConnectedRouter history={history}>

        {/* <Switch>
          <Route path="/" exact component={PostList}/>
          <Route path="/upload" exact component={PostWrite}/>
          <Route path="/upload/:id" exact component={PostWrite}/> */}
          {/* NotFound 페이지 */}
          {/* <Route exact component={NotFound}/>
        </Switch> */}


        </ConnectedRouter>
      </ReactContainer>
    );
  
 
}

export default App;
