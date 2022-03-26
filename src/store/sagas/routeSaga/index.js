import { put, takeEvery, call } from 'redux-saga/effects';
import { getRoute } from '@api';
import { route } from '@store/actions';
import { layoutActions } from '@store/slices/layout';

export function* fetchRoute({ payload }) {
  try {
    const data = yield call(getRoute, payload);
    yield put(layoutActions.setCoordinates(data));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchRouteAction() {
  yield takeEvery(route.toString(), fetchRoute);
}

export default watchRouteAction;
