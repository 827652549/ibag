import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const store= createStore(reducer,composeWithDevTools(
  applyMiddleware(thunk,sagaMiddleware,)
));

// then run the saga
sagaMiddleware.run(mySaga)
export default store;
