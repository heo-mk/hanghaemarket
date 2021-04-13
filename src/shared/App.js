
import React, {useState} from 'react';

import styled from 'styled-components';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
// import { actionCreators as userActions } from "../redux/modules/user"

import Detail from '../pages/Detail';
import Login from "../pages/Login";

function App() {

  const dispatch = useDispatch()

 
    return (
      <ReactContainer>
        {/* <Header/> */}
        <ConnectedRouter history={history}>

        <Switch> 
            <Route path="/login" exact component={Login}/>
        </Switch> 
         
          {/* {/* <Route path="/upload" exact component={PostWrite}/>
          <Route path="/upload/:id" exact component={PostWrite}/> */} 
          {/* NotFound 페이지 */}
          {/* <Route exact component={NotFound}/> */}
       

        <Detail/>
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
