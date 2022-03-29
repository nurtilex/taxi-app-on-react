import { put, takeEvery, all } from 'redux-saga/effects';
import { preLogout } from '@store/actions';
import { authActions } from '@store/slices/auth';
import { layoutActions } from '@store/slices/layout';
import { userActions } from '@store/slices/user';

export function* clearStorage() {
  localStorage.clear();
  yield all([
    put(authActions.logout()),
    put(userActions.reset()),
    put(layoutActions.setCurrentPage('login')),
  ]);
}

function* watchLogoutAction() {
  yield takeEvery(preLogout.toString(), clearStorage);
}

export default watchLogoutAction;
