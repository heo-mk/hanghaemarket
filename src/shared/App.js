
import React, {useState} from 'react';

import styled from 'styled-components';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user"


import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Header from "../components/Header";
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';


function App() {

  const dispatch = useDispatch()


    return (
      <ReactContainer>
        <Header/>
        <ConnectedRouter history={history}>
          <Switch>
            {/* <Route path="/" exact component={PostList}/> */}
            <Route path="/logins" exact component={Login}/>
            <Route path="/signups" exact component={Signup}/>
            <Route path="/details" exact component={Detail}/>
            <Route exact component={NotFound}/>
            {/* <Route path="/upload" exact component={PostWrite}/> */}
            {/* <Route path="/upload/:id" exact component={PostWrite}/> */} */}
          </Switch>
        </ConnectedRouter>
      </ReactContainer>
    );
  
}


const ReactContainer = styled.div`
  background-color: #FAFAFA;
  width:100vw;
  height:100vh;
  overflow-x: hidden;
`
export default App;
