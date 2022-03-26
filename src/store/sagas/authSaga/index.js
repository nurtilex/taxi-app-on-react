import { put, call, takeEvery } from 'redux-saga/effects';
import { authUser, getCard } from '@api';
import { auth, authRequestFailed, login, addressesList } from '@store/actions';

export function* fetchAuth({ payload }) {
  try {
    const data = yield call(authUser, payload);
    if (data.success) {
      const card = yield call(getCard, data.token);
      const userInfo = {
        email: payload.email,
        token: data.token,
        payment: card || null,
      };
      yield put(login(userInfo));
      yield put(addressesList());
      yield localStorage.setItem('authToken', data.token);
      yield localStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else yield put(authRequestFailed(data.error));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchAuthAction() {
  yield takeEvery(auth.toString(), fetchAuth);
}

export default watchAuthAction;
