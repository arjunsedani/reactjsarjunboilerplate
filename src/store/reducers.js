// @flow
/**
 * @file
 * @author Arjun Sedani
 * 
 */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import currentUser from "../redux/reducers/currentUser";

export const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    currentUser
  });
