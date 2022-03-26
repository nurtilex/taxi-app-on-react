import { put, takeEvery } from 'redux-saga/effects';
import { login, init, addressesList } from '@store/actions';

export function* fetchLocalStorage() {
  const token = yield localStorage.getItem('authToken');
  const user = yield JSON.parse(localStorage.getItem('userInfo') || 'null');

  const isUserSaved = !!token && !!user;
  if (isUserSaved) {
    yield put(login({ token, email: user.email, payment: user.payment }));
    yield put(addressesList());
  }
}

function* watchInitAction() {
  yield takeEvery(init.toString(), fetchLocalStorage);
}

export default watchInitAction;
