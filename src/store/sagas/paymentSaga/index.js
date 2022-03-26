import { put, takeEvery, call } from 'redux-saga/effects';
import { payment } from '@store/actions';
import { userActions } from '@store/slices/user';
import { errorsActions } from '@store/slices/errors';
import { getCard, setCard } from '@api';

export function* fetchPayment({ payload: { method, token, payment } }) {
  try {
    if (method === 'post') {
      // data = {success: true} or {success: false, error: Сообщение об ошибке}
      const data = yield call(setCard, { ...payment, token });

      if (data.success) yield put(userActions.setPayment({payment}));
      else yield put(errorsActions.setPaymentErrorMessage(data.error));
    }
    if (method === 'get') {
      const data = yield call(getCard, token);
      yield put(userActions.setPayment({payment: data}));
    }
  } catch (error) {
    console.error(error.message);
  }
}

function* watchPaymentAction() {
  yield takeEvery(payment.toString(), fetchPayment);
}

export default watchPaymentAction;
