import {createActions, handleActions} from "redux-actions";
import { produce } from "immer";
import { history } from "../configurStore";

const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

const initialState = {
  user: {

  }

}
