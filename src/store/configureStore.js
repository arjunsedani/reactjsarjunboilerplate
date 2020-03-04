/**
 * @file
 * @author Arjun Sedani
 * 
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import history from '../AppHistory';

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(reducer) {
  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(middleware, ReduxThunk))
  );
}
