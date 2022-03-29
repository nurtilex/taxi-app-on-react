import { put, takeEvery } from 'redux-saga/effects';
import { init, addressesList } from '@store/actions';
import { authActions } from '@store/slices/auth';
import { userActions } from '@store/slices/user';

export function* fetchLocalStorage() {
  const token = yield localStorage.getItem('authToken');
  const user = yield JSON.parse(localStorage.getItem('userInfo') || 'null');
  const isUserSaved = token && user;
  // console.log(user);
  if (isUserSaved) {
    yield put(authActions.login({ token }));
    yield put(userActions.setEmail({ email: user.email }));
    yield put(userActions.setPayment({ payment: user.payment }));
    yield put(addressesList());
    console.log();
  }
}

function* watchInitAction() {
  yield takeEvery(init.toString(), fetchLocalStorage);
}

export default watchInitAction;
