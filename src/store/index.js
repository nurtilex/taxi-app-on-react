import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';

const sagaMiddleware = createSagaMiddleware();
// const devTools =
//   process.env.NODE_ENV === 'development'
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
//     : null;
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
