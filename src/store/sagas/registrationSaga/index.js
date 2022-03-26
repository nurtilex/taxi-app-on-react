import { put, takeEvery, call, all } from 'redux-saga/effects';
import { registerUser } from '@api';
import { register } from '@store/actions';
import { authActions } from '@store/slices/auth';
import { errorsActions } from '@store/slices/errors';
import { userActions } from '@store/slices/user';

export function* fetchRegistration({ payload }) {
  try {
    const data = yield call(registerUser, payload);

    if (data.success) {
      yield all([
        put(authActions.login({ token: data.token })),
        put(userActions.setEmail({ email: payload.email })),
        put(userActions.setName({ name: payload.name })),

        localStorage.setItem('authToken', data.token),
        localStorage.setItem(
          'userInfo',
          JSON.stringify({
            token: data.token,
            email: payload.email,
            payment: null,
          })
        ),
      ]);
    } else yield put(errorsActions.setRegistrationErrorMessage(data.error));
  } catch (e) {
    console.log(e.message);
  }
}

function* watchRegistrationAction() {
  yield takeEvery(register.toString(), fetchRegistration);
}

export default watchRegistrationAction;
