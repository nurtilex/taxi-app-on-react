import { put, takeEvery, call } from 'redux-saga/effects';
import { getRoute } from '@api';
import { routesRequestSucceeded, route } from '@store/actions';

export function* fetchRoute({ payload }) {
  try {
    const data = yield call(getRoute, payload);
    yield put(routesRequestSucceeded(data));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchRouteAction() {
  yield takeEvery(route.toString(), fetchRoute);
}

export default watchRouteAction;
