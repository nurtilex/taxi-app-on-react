import { put, takeEvery, call } from 'redux-saga/effects';
import { registerUser } from '../../../api';
import { register, login, registrationRequestFailed } from '../../actions';

export function* fetchRegistration({ payload }) {
  try {
    const data = yield call(registerUser, payload);

    if (data.success) {
      yield put(login({ token: data.token, email: payload.email }));
      yield localStorage.setItem('authToken', data.token);
      yield localStorage.setItem(
        'userInfo',
        JSON.stringify({
          token: data.token,
          email: payload.email,
          payment: null,
        })
      );
    } else yield put(registrationRequestFailed(data.error));
  } catch (e) {
    console.log(e.message);
  }
}

function* watchRegistrationAction() {
  yield takeEvery(register.toString(), fetchRegistration);
}

export default watchRegistrationAction;
