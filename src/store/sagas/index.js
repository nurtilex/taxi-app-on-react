import { all } from 'redux-saga/effects';

import watchAuthAction from './authSaga';
import watchRegistrationAction from './registrationSaga';
import watchAddressesListAction from './addressListSaga';
import watchRouteAction from './routeSaga';
import watchPaymentAction from './paymentSaga';
import watchInitAction from './storageCheckSaga';
import watchLogoutAction from './logoutSaga';

export default function* rootSaga() {
  yield all([
    watchAuthAction(),
    watchRegistrationAction(),
    watchAddressesListAction(),
    watchRouteAction(),
    watchPaymentAction(),
    watchInitAction(),
    watchLogoutAction(),
  ]);
}
