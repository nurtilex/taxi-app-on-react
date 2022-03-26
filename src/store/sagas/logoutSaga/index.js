import { put, takeEvery } from 'redux-saga/effects';
import { logout, preLogout } from '@store/actions';

export function* clearStorage() {
  localStorage.clear();
  yield put(logout());
}

function* watchLogoutAction() {
  yield takeEvery(preLogout.toString(), clearStorage);
}

export default watchLogoutAction;
