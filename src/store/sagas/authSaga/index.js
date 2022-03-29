import { put, call, takeEvery, all } from 'redux-saga/effects';
import { authUser, getCard } from '@api';
import { auth, addressesList } from '@store/actions';
import { authActions } from '@store/slices/auth';
import { userActions } from '@store/slices/user';
import { errorsActions } from '@store/slices/errors';

export function* fetchAuth({ payload }) {
  try {
    yield put(errorsActions.setLoginErrorMessage(null));
    const data = yield call(authUser, payload);
    if (data.success) {
      const card = yield call(getCard, data.token);
      if (card.id) {
        yield put(userActions.setPayment({ payment: card }));
      }
      yield put(userActions.setEmail({ email: payload.email }));
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
