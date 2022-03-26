import { put, call, takeEvery, all } from 'redux-saga/effects';
import { authUser, getCard } from '@api';
import { auth, addressesList } from '@store/actions';
import { authActions } from '@store/slices/auth';
import { errorsActions } from '@store/slices/errors';

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
      yield all([
        put(authActions.login({ token: data.token })),
        put(addressesList()),
        localStorage.setItem('authToken', data.token),
        localStorage.setItem('userInfo', JSON.stringify(userInfo)),
      ]);
    } else yield put(errorsActions.setLoginErrorMessage(data.error));
  } catch (error) {
    console.log(error.message);
  }
}

function* watchAuthAction() {
  yield takeEvery(auth.toString(), fetchAuth);
}

export default watchAuthAction;
