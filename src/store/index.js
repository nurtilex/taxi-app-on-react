import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import { layout } from '@store/slices/layout';
import { auth } from '@store/slices/auth';
import { user } from '@store/slices/user';
import { errors } from '@store/slices/errors';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { layout, auth, user, errors },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
