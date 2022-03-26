import { put, takeEvery, call } from 'redux-saga/effects';
import { payment, paymentUpdate, paymentRequestFailed } from '../../actions';
import { getCard, setCard } from '../../../api';

export function* fetchPayment({ payload: { method, token, payment } }) {
  try {
    if (method === 'post') {
      // data = {success: true} or {success: false, error: Сообщение об ошибке}
      const data = yield call(setCard, { ...payment, token });
      
      if (data.success) yield put(paymentUpdate(payment));
      else yield put(paymentRequestFailed(data.error));
    }
    if (method === 'get') {
      const data = yield call(getCard, token);
      yield put(paymentUpdate, data);
    }
  } catch (error) {
    console.error(error.message);
  }
}

function* watchPaymentAction() {
  yield takeEvery(payment.toString(), fetchPayment);
}

export default watchPaymentAction;
